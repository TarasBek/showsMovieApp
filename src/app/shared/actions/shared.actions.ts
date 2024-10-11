import { createAction, props } from '@ngrx/store';
import { Contents, ItemDetail, MediaType } from '../models/global.types';

export class SharedActions {
  public static getTopRateContent = createAction(
    '[Shared] Get Top Rated Content',
    props<{ path: MediaType }>()
  );

  public static loadTopRatedContentSuccess = createAction(
    '[Shared] Load Global Data Success',
    props<{ data: Contents }>()
  );

  public static loadTopRatedContentFailure = createAction(
    '[Shared] Load Global Data Failure',
    props<{ error: any }>()
  );
  public static performSearch = createAction(
    '[Shared] performSearch',
    props<{ path: MediaType; content: string }>()
  );

  public static saveSearchState = createAction(
    '[Shared] saveSearchState ',
    props<{ content: string }>()
  );
  public static clearSearchState = createAction('[Shared] clearSearchState ');
  public static openItemDetail = createAction(
    '[Shared] openItemDetail',
    props<{ path: MediaType; id: number }>()
  );
  public static loadItemDetailData = createAction(
    '[Shared] loadItemDetailData',
    props<{ data: ItemDetail }>()
  );
}
