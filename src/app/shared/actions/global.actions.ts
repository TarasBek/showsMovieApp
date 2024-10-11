import { createAction, props } from '@ngrx/store';
import { MediaType } from '../models/global.types';


export class GlobalActions {
  static setSelection = createAction(
    '[Global] Load Global Data Success',
    props<{ selection: MediaType }>()
  );
  static loadGlobalData = createAction('[Global] Load Global Data');

  static loadTopRatedMoviesFailure = createAction(
    '[Global] Load Global Data Failure',
    props<{ error: any }>()
  );
}
