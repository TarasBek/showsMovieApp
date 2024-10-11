import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { SharedEffects } from '../../shared/effects/shared.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TvShowsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    TvShowsRoutingModule,
    CardModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TvShowsComponent],
})
export class TvShowsModule {}
