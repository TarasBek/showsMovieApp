import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ItemDetail } from '../../models/global.types';
import { selectItemDetail } from '../../selectors/shared.selectors';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
})
export class ItemDetailComponent implements OnInit {
  data$: Observable<ItemDetail | null> | undefined;
  isMovie: boolean = false;
  loading$: Observable<boolean> | undefined;

  constructor(private store: Store, private location: Location) {
    this.data$ = this.store.select(selectItemDetail);
  }

  ngOnInit(): void {}

  onExit(): void {
    this.location.back();
  }
}
