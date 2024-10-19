import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NotFoundPageComponent } from "./not-found-page.component";

describe("NotFoundPageComponent", () => {
    let component: NotFoundPageComponent;
    let fixture: ComponentFixture<NotFoundPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NotFoundPageComponent);
        component = fixture.componentInstance;
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should render not found message", () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1").textContent).toContain("Page Not Found");
    });
});
