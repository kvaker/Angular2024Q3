import { Component } from "@angular/core";

import { HeaderComponent } from "../../../core/components/header/header.component";

@Component({
    selector: "app-not-found-page",
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: "./not-found-page.component.html",
    styleUrl: "./not-found-page.component.scss"
})
export class NotFoundPageComponent {

}
