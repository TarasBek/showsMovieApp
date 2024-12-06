import { createReducer, on, createAction } from '@ngrx/store';
import { SharedActions } from '../actions/shared.actions';
import { SharedState } from '../shared.state';

const initialState: SharedState = {
  content: null,
  itemDetail: null,
  favoritePhotos: null,
  searchContent: '',
  loading: false,
};

export const sharedReducer = createReducer(
  initialState,
  on(
    SharedActions.getPhotos,
    (state): SharedState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    SharedActions.loadTopRatedContentSuccess,
    (state, action): SharedState => ({
      ...state,
      content: {
        ...state.content,
        items: [...(state.content?.items || []), ...(action.data.items || [])],
      },
      loading: false,
    })
  ),

  on(
    SharedActions.loadFavoritesPhotos,
    (state, action): SharedState => ({
      ...state,
      favoritePhotos: action.data,
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
    SharedActions.openItemDetail,
    (state, action): SharedState => ({
      ...state,
      loading: false,
      itemDetail: action.item,
    })
  )
);
