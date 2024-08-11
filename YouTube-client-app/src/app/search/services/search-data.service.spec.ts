import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { SearchResponse } from "../models/search-response.model";
import { SearchDataService } from "./search-data.service";

describe("SearchDataService", () => {
    let service: SearchDataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SearchDataService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });

        service = TestBed.inject(SearchDataService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should return search results", () => {
        const dummyResponse: SearchResponse = {
            kind: "youtube#searchListResponse",
            etag: "some-etag",
            pageInfo: {
                totalResults: 0,
                resultsPerPage: 5,
            },
            items: [],
        };
        const query = "test";

        service.searchVideos(query).subscribe((response) => {
            expect(response.items.length).toBe(0);
            expect(response.pageInfo.totalResults).toBe(0);
        });

        const searchReq = httpMock.expectOne((req) => req.url.includes("youtube/v3/search") && req.params.has("q"));
        expect(searchReq.request.method).toBe("GET");
        searchReq.flush(dummyResponse);
    });
});
