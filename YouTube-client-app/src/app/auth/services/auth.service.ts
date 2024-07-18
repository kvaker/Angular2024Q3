import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private isAuthenticated = false;

    login(username: string, password: string): void {
        if (username === "user" && password === "password") {
            this.isAuthenticated = true;
            localStorage.setItem("fakeToken", "dummy_token");
            window.location.href = "/home";
        }
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem("fakeToken");
        window.location.href = "/login";
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}
