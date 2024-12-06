import { ApplicationPart } from './models/global.types';
import { SharedState } from './shared.state';

export interface AppState {
  sharedState: SharedState;
  globalState: GlobalState;
}

export interface GlobalState {
  selection: ApplicationPart;
}
