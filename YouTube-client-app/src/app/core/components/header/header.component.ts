import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private searchTerms = new Subject<string>();
  private searchSubscription!: Subscription;
  private authSubscription!: Subscription;
  isLoggedIn: boolean = false;
  userName: string | null = null;
  showBottomHeader: boolean = false;

  @Output() sortByChanged = new EventEmitter<string>();
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.isAuthenticated$.subscribe({
      next: (isAuthenticated) => this.handleAuthChange(isAuthenticated),
    });
    this.searchSubscription = this.searchTerms
      .pipe(
        debounceTime(300),
        filter((term) => term.length >= 3),
        distinctUntilChanged(),
      )
      .subscribe((term) => {
        this.searchTermChanged.emit(term);
      });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  private handleAuthChange(isAuthenticated: boolean): void {
    this.isLoggedIn = isAuthenticated;
    if (isAuthenticated) {
      this.userName = this.authService.getUserName();
    } else {
      this.userName = null;
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
