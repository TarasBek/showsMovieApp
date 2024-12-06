import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleRenderer } from './shared/guards/title.guard';
import { ItemDetailComponent } from './shared/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  {
    path: 'photos',
    loadChildren: () =>
      import('./pages/photos/photos.module').then((m) => m.PhotosModule),
    canActivateChild: [TitleRenderer],
    data: { title: 'Photos' },
  },

  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
    canActivateChild: [TitleRenderer],
    data: { title: 'Favorites' },
  },
  {
    path: 'detail/:type/:id',
    component: ItemDetailComponent,
  },

  { path: '**', redirectTo: 'favorites' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
