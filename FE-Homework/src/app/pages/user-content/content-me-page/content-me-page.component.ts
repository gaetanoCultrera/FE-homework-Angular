import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactForm } from 'src/modules/content';

@Component({
  selector: 'app-content-me-page',
  templateUrl: './content-me-page.component.html',
  styleUrls: ['./content-me-page.component.scss'],
})
export class ContentMePageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      subject: ['', [Validators.required]],
      textArea: [''],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  //I create an object with the values ​​taken from the form and transform it into json
  onSubmit() {
    const dataForm: ContactForm = {
      name: this.contactForm.get('name')?.value,
      surname: this.contactForm.get('surname')?.value,
      email: this.contactForm.get('email')?.value,
      subject: this.contactForm.get('subject')?.value,
      textArea: this.contactForm.get('textArea')?.value,
      checkbox: this.contactForm.get('checkbox')?.value,
    };
    console.log(JSON.stringify(dataForm));
    this.contactForm.reset();
  }
}
