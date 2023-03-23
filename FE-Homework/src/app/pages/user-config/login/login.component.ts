import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private AuthService: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  //if form isn't valid, output is an error
  async onSubmit() {
    try {
      this.AuthService.login(this.loginForm.value).subscribe((result) => {
        this.toastr.success('Connection Successful!');
        this._router.navigate(['feed']);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
