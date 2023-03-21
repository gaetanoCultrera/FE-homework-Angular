import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private AuthService: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.registerForm = formBuilder.group({
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
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    console.log(this.registerForm);
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      alert('errore');
    } else {
      this.AuthService.register(this.registerForm.value).subscribe((result) => {
        console.log(result);
        alert('utente registrato!');
         this._router.navigate(['/login'])
      });
    }
  }
}
