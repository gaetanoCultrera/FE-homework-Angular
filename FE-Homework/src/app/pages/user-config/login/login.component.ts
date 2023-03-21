import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private _router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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

  ngOnInit(): void {
    console.log(this.loginForm);
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert('errore');
    } else {
      this.AuthService.login(this.loginForm.value).subscribe((result) => {
        const { access_token, refresh_token } = result;
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);
        alert('ok');
        // this._router.navigate(['/'])
      });
    }
  }
}
