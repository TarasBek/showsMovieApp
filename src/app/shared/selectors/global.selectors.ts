import { createSelector, createFeatureSelector } from '@ngrx/store';

import { GlobalState } from '../app-state';


export const selectGlobalState = createFeatureSelector<GlobalState>('global');

export const selectSelection = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.selection
);
