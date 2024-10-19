import { WritableSignal } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchResponse } from "../models/search-response.model";
import { SearchDataService } from "../services/search-data.service";
import { SearchResultsComponent } from "./search-results.component";

class MockWritableSignal<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    set(newValue: T) {
        this.value = newValue;
    }

    update(updateFn: (value: T) => T) {
        this.value = updateFn(this.value);
    }

    asReadonly() {
        return () => this.value;
    }

    call(): T {
        return this.value;
    }
}

describe("SearchResultsComponent", () => {
    let component: SearchResultsComponent;
    let fixture: ComponentFixture<SearchResultsComponent>;
    let mockSearchDataService: Partial<SearchDataService>;

    beforeEach(() => {
        const searchResultsSignal = new MockWritableSignal<SearchResponse | null>(
            null,
        ) as WritableSignal<SearchResponse | null>;

        mockSearchDataService = {
            searchResults$: searchResultsSignal,
        };

        TestBed.configureTestingModule({
            declarations: [SearchResultsComponent],
            providers: [{ provide: SearchDataService, useValue: mockSearchDataService }],
        }).compileComponents();

        fixture = TestBed.createComponent(SearchResultsComponent);
        component = fixture.componentInstance;
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have searchResults with 0 items", () => {
        const searchResponse: SearchResponse = {
            kind: "youtube#searchListResponse",
            etag: "some-etag",
            pageInfo: { totalResults: 0, resultsPerPage: 5 },
            items: [],
        };

        mockSearchDataService.searchResults$!.set(searchResponse);
        fixture.detectChanges();

        const searchResults = mockSearchDataService.searchResults$!();
        expect(searchResults?.items.length).toBe(0);
    });
});
