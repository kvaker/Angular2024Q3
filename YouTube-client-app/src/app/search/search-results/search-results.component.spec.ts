import { signal } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchResponse } from "../models/search-response.model";
import { SearchDataService } from "../services/search-data.service";
import { SearchResultsComponent } from "./search-results.component";

describe("SearchResultsComponent", () => {
    let component: SearchResultsComponent;
    let fixture: ComponentFixture<SearchResultsComponent>;
    let mockSearchDataService: Partial<SearchDataService>;

    beforeEach(() => {
        mockSearchDataService = {
            searchResults$: signal<SearchResponse | null>(null),
        };

        TestBed.configureTestingModule({
            declarations: [SearchResultsComponent],
            providers: [
                { provide: SearchDataService, useValue: mockSearchDataService },
            ],
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

        if (mockSearchDataService.searchResults$) {
            mockSearchDataService.searchResults$.set(searchResponse);
            fixture.detectChanges();

            const searchResults = mockSearchDataService.searchResults$();
            expect(searchResults?.items.length).toBe(0);
        } else {
            fail("mockSearchDataService.searchResults$ is undefined");
        }
    });
});
