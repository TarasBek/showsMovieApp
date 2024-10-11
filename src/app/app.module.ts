import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';

import { MoviesModule } from './pages/movies/movies.module';
import { TvShowsModule } from './pages/tv-shows/tv-shows.module';

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
    MoviesModule,
    TvShowsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([SharedEffects]),

    StoreModule.forFeature('shared', sharedReducer, {
      metaReducers: metaReducers,
    }),

    StoreModule.forRoot({ global: globalReducer }),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [TitleRenderer, GlobalActions, SharedActions],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
