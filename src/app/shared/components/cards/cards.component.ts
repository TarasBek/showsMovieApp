import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  selectFavoritedPhotos,
  selectPhotos,
} from '../../selectors/shared.selectors';
import { SharedActions } from '../../actions/shared.actions';
import { Content, Contents, ApplicationPart } from '../../models/global.types';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit, OnChanges {
  @Input() path: ApplicationPart = 'photos';
  loader = false;
  data$: Observable<Contents | null> | undefined;
  constructor(private readonly store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(SharedActions.getPhotos({ path: this.path }));
  }

  ngOnChanges() {
    this.data$ =
      this.path === 'favorites'
        ? this.store.select(selectFavoritedPhotos)
        : this.store.select(selectPhotos);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const threshold = 200;
    const position = window.innerHeight + window.scrollY;
    const height = document.documentElement.scrollHeight;
    if (
      !this.loader &&
      height - position <= threshold &&
      this.path === 'photos'
    ) {
      this.loadMoreContentWithDelay();
    }
  }

  loadMoreContentWithDelay() {
    this.loader = true;
    const randomDelay = Math.floor(Math.random() * 200) + 200;
    setTimeout(() => {
      this.store.dispatch(SharedActions.loadMoreContent({ path: this.path }));
      this.loader = false;
    }, randomDelay);
  }

  onCardClick(item: Content) {
    if (this.path === 'favorites') {
      this.store.dispatch(SharedActions.openItemDetail({ item: item }));
      this.router.navigate([`detail/${this.path}/${item.id}`]);
    } else if (this.path === 'photos') {
      this.store.dispatch(SharedActions.addToFavorite({ item: item }));
    }
  }
}
