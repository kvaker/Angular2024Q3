import {
    Directive, ElementRef, Input, OnInit
} from "@angular/core";

@Directive({
    selector: "[appSearchItem]",
    standalone: true,
})
export class SearchItemDirective implements OnInit {
    @Input() publishedDate!: string;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.updateBackgroundColor();
    }

    private updateBackgroundColor() {
        const today = new Date();
        const publishedAt = new Date(this.publishedDate);
        const timeDifference = today.getTime() - publishedAt.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (daysDifference > 180) {
            this.el.nativeElement.style.backgroundColor = "#FF5C5C";
        } else if (daysDifference > 30) {
            this.el.nativeElement.style.backgroundColor = "#FFD966";
        } else if (daysDifference > 7) {
            this.el.nativeElement.style.backgroundColor = "#6FCF97";
        } else {
            this.el.nativeElement.style.backgroundColor = "#2F80ED";
        }
    }
}
