import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { HomeContentsComponent } from './home-contents/home-contents.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule } from '@angular/forms';
import { IndividualsComponent } from './individuals/individuals.component';
import { IndividualPageComponent } from './individual-page/individual-page.component';
import { IndividualMoviesComponent } from './individual-movies/individual-movies.component';
import { BarRatingModule } from "ngx-bar-rating";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenComponent } from './register/token.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AccountPageComponent } from './account-page/account-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeContentsComponent,
    NotFoundComponent,
    MoviePageComponent,
    ReviewsComponent,
    ReviewFormComponent,
    IndividualsComponent,
    IndividualPageComponent,
    IndividualMoviesComponent,
    LoginComponent,
    RegisterComponent,
    TokenComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BarRatingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
