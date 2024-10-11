import { Action, createReducer, on } from '@ngrx/store';

import { GlobalActions } from '../actions/global.actions';
import { MediaType } from '../models/global.types';

export interface GlobalState {
  selection: MediaType;
}

export const initialState: GlobalState = {
  selection: 'tv',
};

const _globalReducer = createReducer(
  initialState,
  on(GlobalActions.setSelection, (state, action) => ({
    ...state,
    selection: action.selection,
  }))
);

export function globalReducer(state: GlobalState | undefined, action: Action) {
  return _globalReducer(state, action);
}
