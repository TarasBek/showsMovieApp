import { Content, Contents, ItemDetail } from './models/global.types';
import { ActionReducer, MetaReducer } from '@ngrx/store';

import { localStorageSync } from 'ngrx-store-localstorage';

export interface SharedState {
  content: Contents | null;
  itemDetail: ItemDetail | null;
  searchContent: string | null;
  loading: boolean;
}

export const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> =>
  localStorageSync({
    keys: ['searchContent', 'itemDetail', 'content'],
    storageKeySerializer: (key) => `shared${key}`,
    rehydrate: true,
  })(reducer);

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];
