import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/user-config/register/register.component';
import { LoginComponent } from './pages/user-config/login/login.component';
import { ProfileComponent } from './pages/user-content/profile/profile.component';
import { ContentFeedPageComponent } from './pages/user-content/content-feed-page/content-feed-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ContentMePageComponent } from './pages/user-content/content-me-page/content-me-page.component';
import { WishlistPageComponent } from './pages/user-content/wishlist-page/wishlist-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'feed',pathMatch:'full'},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'feed',
        component: ContentFeedPageComponent,
      },
      {
        path: 'contact',
        component: ContentMePageComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'wishlist',
        component: WishlistPageComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'feed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
