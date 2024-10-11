import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { ItemDetailComponent } from '../../shared/components/item-detail/item-detail.component';


const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'detail/:type/:id',
    component: ItemDetailComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
