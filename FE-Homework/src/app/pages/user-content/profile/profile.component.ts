import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/modules/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile!: {name:string,role:string,avatar:string};

  constructor(private AuthService: AuthService,private _router: Router){}

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    this.AuthService.profile().subscribe((result)=>{
      console.log(result)
      this.userProfile=result
    })
  }

  onLogout():void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
    this._router.navigate(['login']);
  }

}
