import { SharedState } from '../shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const sharedState = createFeatureSelector<SharedState>('shared');

export const selectTopRatedMoviesData = createSelector(
  sharedState,
  (x) => x.content
);
export const selectSearchContent = createSelector(
  sharedState,
  (x) => x.searchContent
);
export const selectIsDataLoading = createSelector(
  sharedState,
  (x) => x.loading
);
export const selectItemDetail = createSelector(
  sharedState,
  (x) => x.itemDetail
);
