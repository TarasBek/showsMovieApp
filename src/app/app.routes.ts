import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
  { path: 'movies', component: MoviesComponent }, 
];
