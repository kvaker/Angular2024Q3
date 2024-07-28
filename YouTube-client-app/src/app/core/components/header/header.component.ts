import { CommonModule } from "@angular/common";
import {
    Component, EventEmitter, OnDestroy, OnInit, Output
} from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";

import { AuthService } from "../../../auth/services/auth.service";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
    private searchTerms = new Subject<string>();
    private searchSubscription!: Subscription;
    showBottomHeader: boolean = false;

    @Output() sortByChanged = new EventEmitter<string>();
    @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.searchSubscription = this.searchTerms.pipe(
            debounceTime(300),
            filter((term) => term.length >= 3),
            distinctUntilChanged()
        ).subscribe((term) => {
            this.searchTermChanged.emit(term);
        });
    }

    ngOnDestroy() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }

    toggleHeaderBottom() {
        this.showBottomHeader = !this.showBottomHeader;
    }

    setSortByField(field: string) {
        this.sortByChanged.emit(field);
    }

    onSearch(event: Event) {
        event.preventDefault();
        const input = event.target as HTMLInputElement;
        this.searchTermChanged.emit(input.value);
    }
    logout() {
        this.authService.logout();
    }
}
