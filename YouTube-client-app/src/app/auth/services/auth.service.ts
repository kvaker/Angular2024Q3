import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private isAuthenticated = false;

    constructor(private router: Router) {}

    login(username: string, password: string): void {
        if (username && password) {
            this.isAuthenticated = true;
            localStorage.setItem("fakeToken", "dummy_token");
            this.router.navigate(["/"]);
        }
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem("fakeToken");
        this.router.navigate(["/login"]);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}
