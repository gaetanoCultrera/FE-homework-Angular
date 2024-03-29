import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  dataRoles: string[] = [];
  avatarDefault: string = '';

  constructor(
    private AuthService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router
  ) {
    this.dataRoles = ['admin', 'customer'];
    this.avatarDefault = 'https://api.lorem.space/image/face?w=640&h=480&r=867';

    this.registerForm = formBuilder.group({
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
      name: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', [Validators.required]],
      avatar: [
        'https://api.lorem.space/image/face?w=640&h=480&r=867',
        [Validators.required],
      ],
    });
  }
  ngOnInit(): void {
    localStorage.clear();
  }

  //if form isn't valid, output is an error, in html template has been added validity management
  async onSubmit() {
    try {
      this.AuthService.register(this.registerForm.value).subscribe((result) => {
        this.toastr.success('Registration completed!');
        this._router.navigate(['/login']);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
