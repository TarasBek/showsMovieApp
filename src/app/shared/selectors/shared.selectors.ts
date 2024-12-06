import { SharedState } from '../shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const sharedState = createFeatureSelector<SharedState>('shared');

export const selectPhotos = createSelector(sharedState, (x) => x.content);
export const selectFavoritedPhotos = createSelector(
  sharedState,
  (x) => x.favoritePhotos
);
export const selectIsDataLoading = createSelector(
  sharedState,
  (x) => x.loading
);
export const selectItemDetail = createSelector(
  sharedState,
  (x) => x.itemDetail
);
