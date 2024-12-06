import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Content } from '../../models/global.types';
import { selectItemDetail } from '../../selectors/shared.selectors';
import { SharedActions } from '../../actions/shared.actions';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  data$: Observable<Content | null> | undefined;
  constructor(private store: Store, private location: Location) {
    this.data$ = this.store.select(selectItemDetail);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onExit(): void {
    this.location.back();
  }

  removeFromFavorite(item: Content): void {
    this.store.dispatch(SharedActions.removeFromFavorite({ item }));
    this.location.back();
  }
}
