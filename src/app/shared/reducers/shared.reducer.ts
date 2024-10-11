import { createReducer, on, createAction } from '@ngrx/store';
import { SharedActions } from '../actions/shared.actions';
import { SharedState } from '../shared.state';


const initialState: SharedState = {
  content: null,
  itemDetail: null,
  searchContent: '',
  loading: false,
};

export const sharedReducer = createReducer(
  initialState,
  on(
    SharedActions.getTopRateContent,
    (state): SharedState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    SharedActions.loadTopRatedContentSuccess,
    (state, action): SharedState => ({
      ...state,
      content: action.data,
      loading: false,
    })
  ),
  on(
    SharedActions.loadTopRatedContentFailure,
    (state): SharedState => ({
      ...state,
      loading: false,
    })
  ),
  on(
    SharedActions.saveSearchState,
    (state, action): SharedState => ({
      ...state,
      searchContent: action.content,
    })
  ),
  on(
    SharedActions.clearSearchState,
    (state): SharedState => ({
      ...state,
      searchContent: '',
    
    })
  ),
  on(
    SharedActions.openItemDetail,
    (state): SharedState => ({
      ...state,
      itemDetail: null,
      loading: false,
    })
  ),
 
  on(
    SharedActions.loadItemDetailData,
    (state, action): SharedState => ({
      ...state,
      itemDetail: action.data,
    })
  )
);
