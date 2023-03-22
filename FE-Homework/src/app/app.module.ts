import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { ContentService } from './services/content.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user-config/register/register.component';
import { LoginComponent } from './pages/user-config/login/login.component';
import { ProfileComponent } from './pages/user-content/profile/profile.component';
import { NavbarComponent } from './pages/user-content/navbar/navbar.component';
import { ContentFeedPageComponent } from './pages/user-content/content-feed-page/content-feed-page.component';
import { ContentMePageComponent } from './pages/user-content/content-me-page/content-me-page.component';
import { WishlistPageComponent } from './pages/user-content/wishlist-page/wishlist-page.component';
import { CardsComponent } from './pages/user-content/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    ContentFeedPageComponent,
    ContentMePageComponent,
    WishlistPageComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [AuthService,ContentService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
