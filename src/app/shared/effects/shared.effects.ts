import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';
import { SharedActions } from '../actions/shared.actions';

import { Contents } from '../models/global.types';
import { MessageService } from 'primeng/api';

@Injectable()
export class SharedEffects {
  favoritePhotosStorageKey = 'favoritePhotos';
  constructor(
    private actions$: Actions,
    private globalService: GlobalService,
    private messageService: MessageService
  ) {}

  getPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.getPhotos),
      switchMap((action) => {
        if (action.path === 'photos') {
          return this.globalService.getImages().pipe(
            map((response: Contents) => {
              return SharedActions.loadTopRatedContentSuccess({
                data: response,
              });
            }),
            catchError((error) => {
              console.error('Error in getPhotos effect:', error);
              return of(SharedActions.loadTopRatedContentFailure({ error }));
            })
          );
        } else if (action.path === 'favorites') {
          const favorites = JSON.parse(
            localStorage.getItem(this.favoritePhotosStorageKey) ||
              '{"items": []}'
          );

          return of(
            SharedActions.loadFavoritesPhotos({
              data: favorites,
            })
          );
        }

        return of();
      })
    )
  );
  loadMoreContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.loadMoreContent),
      switchMap(() =>
        this.globalService.getMoreImages(10).pipe(
          map((response: Contents) =>
            SharedActions.loadTopRatedContentSuccess({ data: response })
          ),
          catchError((error) =>
            of(SharedActions.loadTopRatedContentFailure({ error }))
          )
        )
      )
    )
  );

  addToFavorite$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.addToFavorite),
        tap((action) => {
          const currentFavorites = JSON.parse(
            localStorage.getItem(this.favoritePhotosStorageKey) ||
              '{"items": []}'
          );
          const itemExists = currentFavorites.items.some(
            (favorite: any) => favorite.id === action.item.id
          );
          if (!itemExists) {
            currentFavorites.items.push(action.item);
            localStorage.setItem(
              this.favoritePhotosStorageKey,
              JSON.stringify(currentFavorites)
            );
            this.showMessage('success', 'Success', 'Photo added to favorites');
          } else {
            this.showMessage(
              'warn',
              'Oops',
              'This photo is already in your favorites'
            );
          }
        })
      ),
    { dispatch: false }
  );
  removeFromFavorite$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.removeFromFavorite),
        tap((action) => {
          const currentFavorites = JSON.parse(
            localStorage.getItem(this.favoritePhotosStorageKey) ||
              '{"items": []}'
          );

          const itemIndex = currentFavorites.items.findIndex(
            (favorite: any) => favorite.id === action.item.id
          );

          if (itemIndex > -1) {
            currentFavorites.items.splice(itemIndex, 1);
            localStorage.setItem(
              this.favoritePhotosStorageKey,
              JSON.stringify(currentFavorites)
            );
            this.showMessage(
              'success',
              'Success',
              'Photo removed from favorites'
            );
          } else {
            this.showMessage(
              'warn',
              'Oops',
              'Photo not found in your favorites'
            );
          }
        })
      ),
    { dispatch: false }
  );

  private showMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({
      key: 'toast',
      severity,
      summary,
      detail,
      life: 1500,
    });
  }
}
