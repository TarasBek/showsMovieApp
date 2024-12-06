import { PhotosComponent } from './photos.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-roting.module';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { SharedEffects } from '../../shared/effects/shared.effects';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    PhotosRoutingModule,
    SharedModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PhotosComponent],
})
export class PhotosModule {}
