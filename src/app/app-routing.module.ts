import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomeComponent } from './home/home.component';
import { IndividualPageComponent } from './individual-page/individual-page.component';
import { LoginComponent } from './login/login.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies/:id', component: MoviePageComponent },
  { path: 'individuals/:id', component: IndividualPageComponent },
  { path: 'accounts/:id', component: AccountPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }