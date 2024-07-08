import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SearchItemComponent } from "../search-item/search-item.component";
import { SearchResponse } from "../search-response.model";
import { SearchDataService } from '../search-data.service';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: "app-search-results",
  standalone: true,
  imports: [CommonModule, SearchItemComponent, HeaderComponent ],
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})

export class SearchResultsComponent implements OnInit {
  searchResults: SearchResponse = {
    kind: '',
    etag: '',
    pageInfo: { totalResults: 0, resultsPerPage: 0 },
    items: []
  };

  constructor(private dataService: SearchDataService) {}

  ngOnInit(): void {
    this.dataService.getMockSearchResults().subscribe(
      (data: SearchResponse) => {
        this.searchResults = data;
        console.log('Received search results:', this.searchResults);
      },
      (error) => {
        console.error('Error fetching search results', error);
      }
    );
  }

  onSortByChanged(field: string) {
    if (field === 'date') {
      this.sortByDate();
    } else if (field === 'count-of-views') {
      this.sortByViewsCount();
    } else if (field === 'word-or-sentence') {
      this.sortByWordOrSentence();
    }
  }

  sortByDate() {
    this.searchResults.items.sort((a, b) => {
      if (a.snippet.publishedAt && b.snippet.publishedAt) {
        return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
      }
      return 0;
    });
  }

  sortByViewsCount() {
    this.searchResults.items.sort((a, b) => {
      if (a.statistics && b.statistics && typeof a.statistics.viewCount === 'number' && typeof b.statistics.viewCount === 'number') {
        return b.statistics.viewCount - a.statistics.viewCount;
      }
      return 0;
    });
  }

  sortByWordOrSentence() {
    this.searchResults.items.sort((a, b) => {
    return a.snippet.title.localeCompare(b.snippet.title);
    });
  }

  // sortSearchResults(): void {
  //   this.searchResults.items.sort((a, b) => {
  //     if (a.snippet.title < b.snippet.title) {
  //       return -1;
  //     }
  //     if (a.snippet.title > b.snippet.title) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
}
