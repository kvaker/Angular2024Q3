import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private authToken: string = "AIzaSyCnl3dLz1J0Zip7eZQFWr2MaX9v2JVEaok";

    constructor(private logger: NGXLogger) {
        this.authToken = localStorage.getItem("token") || "";
    }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let authReq = req;
        if (req.url.includes("youtube")) {
            authReq = req.clone({
                url: req.url.replace("https://www.googleapis.com/youtube/v3/", ""),
                setParams: { key: this.authToken },
            });
        }

        authReq = authReq.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authToken}`,
            },
        });

        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.logger.error("Unauthorized request");
                } else {
                    this.logger.error(`Request failed with status: ${error.status}`, error);
                }
                return throwError(() => new Error(`Error in request: ${error.message}`));
            }),
        );
    }
}
