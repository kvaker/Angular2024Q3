import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "../../../core/components/header/header.component";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [CommonModule, FormsModule, HeaderComponent, RouterOutlet],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    constructor(private authService: AuthService) {}

    login(username: string, password: string): void {
        this.authService.login(username, password);
    }
}
