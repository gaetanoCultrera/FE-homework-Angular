import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/modules/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile!: User;

  constructor(private AuthService: AuthService){}

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    this.AuthService.profile().subscribe((result)=>{
      console.log(result)
      this.userProfile=result
    })
  }

}
