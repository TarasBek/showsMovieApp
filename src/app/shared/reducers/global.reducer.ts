import { Action, createReducer, on } from '@ngrx/store';

import { GlobalActions } from '../actions/global.actions';
import { ApplicationPart } from '../models/global.types';

export interface GlobalState {
  selection: ApplicationPart;
}

export const initialState: GlobalState = {
  selection: 'photos',
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
