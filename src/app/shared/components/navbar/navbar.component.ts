import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { animate, style, transition, trigger } from '@angular/animations';

import { ApplicationPart } from '../../models/global.types';
import { Store } from '@ngrx/store';
import { selectSelection } from '../../selectors/global.selectors';
import { GlobalActions } from '../../actions/global.actions';
import { SharedActions } from '../../actions/shared.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('categorySlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50%)' }),
        animate(
          '200ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({ opacity: 0, transform: 'translateX(50%)' })
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  selectedCategory: string = '';

  constructor(private readonly router: Router, private readonly store: Store) {}
  ngOnInit() {
    this.store.dispatch(SharedActions.clearSearchState());
    this.store.select(selectSelection).subscribe((selection) => {
      this.selectedCategory = selection;
    });
  }
  switchTab(tab: ApplicationPart) {
    if (this.selectedCategory === tab) {
      return;
    }
    this.store.dispatch(GlobalActions.setSelection({ selection: tab }));
    this.router.navigate([`/${tab}`]);
    this.selectedCategory = '';
    setTimeout(() => (this.selectedCategory = tab), 50);
  }
}
