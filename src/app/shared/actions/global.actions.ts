import { createAction, props } from '@ngrx/store';
import { ApplicationPart } from '../models/global.types';

export class GlobalActions {
  static setSelection = createAction(
    '[Global] Load Global Data Success',
    props<{ selection: ApplicationPart }>()
  );
  static loadGlobalData = createAction('[Global] Load Global Data');
}
