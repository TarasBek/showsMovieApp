import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { ItemDetailComponent } from '../../shared/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  {
    path: 'detail/:type/:id',
    component: ItemDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
