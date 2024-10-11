import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleRenderer } from './shared/guards/title.guard';
import { ItemDetailComponent } from './shared/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Default route
  {
    path: 'movie',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
    canActivateChild: [TitleRenderer],
    data: { title: 'Movies' },
  },

  {
    path: 'tv',
    loadChildren: () =>
      import('./pages/tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
    canActivateChild: [TitleRenderer],
    data: { title: 'Tv Shows' },
  },
  {
    path: 'detail/:type/:id',
    component: ItemDetailComponent,
  },

  { path: '**', redirectTo: 'tv' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
