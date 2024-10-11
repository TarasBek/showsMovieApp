import { MoviesComponent } from './movies.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-roting.module';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { SharedEffects } from '../../shared/effects/shared.effects';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    MoviesRoutingModule,
    SharedModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MoviesComponent],
})
export class MoviesModule {}
