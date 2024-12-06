import { createAction, props } from '@ngrx/store';
import {
  Content,
  Contents,
  ApplicationPart,
} from '../models/global.types';

export class SharedActions {
  public static getPhotos = createAction(
    '[Shared] Get Top Rated Content',
    props<{ path: ApplicationPart }>()
  );

  public static loadTopRatedContentSuccess = createAction(
    '[Shared] Load Global Data Success',
    props<{ data: Contents }>()
  );
  public static loadFavoritesPhotos = createAction(
    '[Shared] loadFavoritesPhotos',
    props<{ data: Contents }>()
  );

  public static loadTopRatedContentFailure = createAction(
    '[Shared] Load Global Data Failure',
    props<{ error: any }>()
  );
  public static performSearch = createAction(
    '[Shared] performSearch',
    props<{ path: ApplicationPart; content: string }>()
  );

  public static saveSearchState = createAction(
    '[Shared] saveSearchState ',
    props<{ content: string }>()
  );
  public static clearSearchState = createAction('[Shared] clearSearchState ');
  public static openItemDetail = createAction(
    '[Shared] openItemDetail',
    props<{ item: Content }>()
  );
  public static loadItemDetailData = createAction(
    '[Shared] loadItemDetailData',
    props<{ image_url: string }>()
  );
  public static addToFavorite = createAction(
    '[Shared] addToFavorite',
    props<{ item: Content }>()
  );

  public static removeFromFavorite = createAction(
    '[Shared] removeFromFavorite',
    props<{ item: Content }>()
  );
  public static loadMoreContent = createAction(
    '[Shared] Load More Content',
    props<{ path: ApplicationPart }>()
  );
}
