import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { MediaType } from '../../models/global.types';
import { selectSelection } from '../../selectors/global.selectors';
import { SharedActions } from '../../actions/shared.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl: FormControl = new FormControl('', [Validators.minLength(4)]);
  results: any[] = [];
  selection = 'tv';
  private searchSub: Subscription | undefined;
  private selectionSub: Subscription | undefined;
  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.selectionSub = this.store
      .select(selectSelection)
      .subscribe((selection) => {
        this.selection = selection;
      });

    this.searchSub = this.searchControl.valueChanges
      .pipe(
        filter(() => this.searchControl.status === 'VALID'),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((x) => {
      
        this.store.dispatch(SharedActions.saveSearchState({ content: x }));
        this.performSearch(x);
      });
  }
  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
    this.selectionSub?.unsubscribe();
  }

  performSearch(content: string) {
    if (content?.length! > 3) {
      setTimeout(() => {
        this.store.dispatch(
          SharedActions.performSearch({
            path: this.selection as MediaType,
            content,
          })
        );
      }, 1000);
    }
    return [];
  }

  switchTab(tab: string) {
    this.selection = tab;
  }
}
