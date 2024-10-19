import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private userName: string | null = null;
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: object,
    ) {
        this.checkInitialLoginStatus();
    }

    login(username: string, password: string): void {
        if (username && password) {
            this.setUserName(username);
            this.isAuthenticatedSubject.next(true);
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem("fakeToken", "dummy_token");
            }
            this.router.navigate(["/"]);
        }
    }
    setUserName(name: string): void {
        this.userName = name;
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem("userName", name);
        }
    }

    getUserName(): string | null {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem("userName");
        }
        return this.userName;
    }

    logout(): void {
        this.isAuthenticatedSubject.next(false);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem("fakeToken");
        }
        this.userName = null;
        this.router.navigate(["/login"]);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticatedSubject.value;
    }
    private checkInitialLoginStatus(): void {
        let token: string | null = null;
        if (isPlatformBrowser(this.platformId)) {
            token = localStorage.getItem("fakeToken");
        }
        this.isAuthenticatedSubject.next(!!token);
    }
}
