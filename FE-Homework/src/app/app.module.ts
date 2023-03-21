import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user-config/register/register.component';
import { LoginComponent } from './pages/user-config/login/login.component';

import { AuthService } from './services/auth.service';
import { ProfileComponent } from './pages/user-content/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
