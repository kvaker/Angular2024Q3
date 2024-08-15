import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private authToken: string = "AIzaSyAqZjXqcfBBRBx6wMwX942ExP75KnMelZk";

    constructor() {
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

        return next.handle(authReq).pipe();
    }
}
