import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
interface gender {
  value: string;
}
interface role {
  value: string;
}
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  hide = true;
  form!: FormGroup;

  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];

  Roles: role[] = [
    { value: 'admin' },
    { value: 'user' }

  ];

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EdituserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.dialogRef.updateSize('70%');


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

          ]
        ],
        birthday: [formatDate(this.data.user.birthday, 'yyyy-MM-dd', 'en'), Validators.required],

        gender: [this.data.user.gender],
        role: [this.data.user.role, Validators.required],
      }
    );

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  //
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    console.log(this.form.value)

  }

}
