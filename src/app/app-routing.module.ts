import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndividualPageComponent } from './individual-page/individual-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MoviePageComponent },
  { path: 'individuals/:id', component: IndividualPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }