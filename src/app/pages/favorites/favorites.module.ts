import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent as FavoritesComponent } from './favorites.component';
import { TvShowsRoutingModule } from './favorites-routing.module';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { SharedEffects } from '../../shared/effects/shared.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    TvShowsRoutingModule,
    CardModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
