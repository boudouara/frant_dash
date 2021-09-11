import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface gender {
  value: string;

}
interface role {
  value: string;

}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  hide = true;
  form!: FormGroup;

  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];

  Roles: role[] = [
    { value: 'Admin' },
    { value: 'user' }

  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required,
        Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40)
          ]
        ],
        birthday: ['', Validators.required],
        role: ['', Validators.required],
      }
    );

  }
  //
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

  }
}
