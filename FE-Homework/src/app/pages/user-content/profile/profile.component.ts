import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile!: { name: string; role: string; avatar: string };

  constructor(
    private AuthService: AuthService,
    private _router: Router,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.AuthService.getProfileUser().subscribe((result) => {
      this.userProfile = { ...result };
    });
  }

  onLogout(): void {
    try {
      this.AuthService.logout();
      this._router.navigate(['login']);
      this.darkModeService.disable();
    } catch (error) {
      console.log(error)
    }
  }
}
