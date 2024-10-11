import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { isNil } from 'lodash';

import { Router } from '@angular/router';
import {
  selectSearchContent,
  selectTopRatedMoviesData,
} from '../../selectors/shared.selectors';
import { SharedActions } from '../../actions/shared.actions';
import { Content, Contents, MediaType } from '../../models/global.types';

import { SharedState } from '../../shared.state';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit, OnDestroy {
  @Input() path: MediaType = 'tv';
  isMovie: boolean = false;
  data$: Observable<Contents | null>;
  loader = false;
  private contentSub: Subscription | undefined;
  constructor(
    private readonly store: Store<SharedState>,
    private router: Router
  ) {
    this.data$ = this.store.select(selectTopRatedMoviesData);
  }

  ngOnInit() {
    this.contentSub = this.store.select(selectSearchContent).subscribe((x) => {
      if (!isNil(x) && !!x) {
        this.store.dispatch(
          SharedActions.performSearch({ path: this.path, content: x })
        );
      } else {
        this.store.dispatch(
          SharedActions.getTopRateContent({ path: this.path })
        );
      }
    });
  }
  ngOnDestroy(): void {
    this.contentSub?.unsubscribe();
  }
  onCardClick(item: Content) {
    this.store.dispatch(
      SharedActions.openItemDetail({ path: this.path, id: item.id })
    );
    this.router.navigate([`detail/${this.path}/${item.id}`]);
  }
}
