import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';

import { PhotosModule } from './pages/photos/photos.module';
import { FavoritesModule } from './pages/favorites/favorites.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedActions } from './shared/actions/shared.actions';
import { globalReducer } from './shared/reducers/global.reducer';
import { sharedReducer } from './shared/reducers/shared.reducer';
import { AppState } from './shared/app-state';
import { SharedModule } from './shared/shared.module';

import { SharedEffects } from './shared/effects/shared.effects';
import { GlobalActions } from './shared/actions/global.actions';
import { TitleRenderer } from './shared/guards/title.guard';
import { CommonModule } from '@angular/common';
import { metaReducers } from './shared/shared.state';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    SharedModule,
    ButtonModule,
    CommonModule,
    PhotosModule,
    FavoritesModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([SharedEffects]),
    ToastModule,
    StoreModule.forFeature('shared', sharedReducer, {
      metaReducers: metaReducers,
    }),

    StoreModule.forRoot({ global: globalReducer }),
  ],
  declarations: [AppComponent],
  providers: [TitleRenderer, GlobalActions, SharedActions, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
