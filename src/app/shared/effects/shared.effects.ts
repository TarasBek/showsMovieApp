import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';
import { SharedActions } from '../actions/shared.actions';

import { Contents, ItemDetail } from '../models/global.types';

@Injectable()
export class SharedEffects {
  constructor(
    private actions$: Actions,
    private globalService: GlobalService
  ) {}

  getTopRadetMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.getTopRateContent),
      switchMap((action) => {
        return this.globalService.getTopRatedContent(action.path).pipe(
          map((response: Contents) => {
            return SharedActions.loadTopRatedContentSuccess({
              data: response,
            });
          }),
          catchError((error) => {
            console.error('Error in getTopRadetMovies effect:', error);
            return of(SharedActions.loadTopRatedContentFailure({ error }));
          })
        );
      })
    )
  );
  getSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.performSearch),
      switchMap((action) =>
        this.globalService.searchContent(action.path, action.content).pipe(
          map((response) => {
            return SharedActions.loadTopRatedContentSuccess({
              data: response,
            });
          }),
          catchError((error) => {
            console.error('Error in getSearch effect:', error);
            return of(SharedActions.loadTopRatedContentFailure({ error }));
          })
        )
      )
    )
  );

  openDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.openItemDetail),
      switchMap((x) =>
        this.globalService.openDetail(x.path, x.id).pipe(
          map((response) =>
            SharedActions.loadItemDetailData({
              data: response as ItemDetail,
            })
          ),
          catchError((error) =>
            of(SharedActions.loadTopRatedContentFailure({ error }))
          )
        )
      )
    )
  );
}
