import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

import { formatDate } from '@angular/common';
interface gender {
  value: string;
 
}
interface role {
  value: string;
 
}
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  hide =true;
  form!: FormGroup;
  formcompany!: FormGroup;
  genders: gender[] = [
    {value: 'female'},
    {value: 'male'}
  
  ];
  Roles: role[] = [
    {value: 'admin'},
    {value: 'user'}
  
  ];
 user  = new User()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     //fake data
     this.user.fullname = " Oumaima Laib"
     this.user.gender  = "female"
     this.user.birthday  =new Date(1999, 8, 22).toISOString().split('T')[0];
     this.user.username  = "oumaima123"
     this.user.email  = "o.lb@gmail.com"
     this.user.role="admin"
     //form



     this.form = this.formBuilder.group(
      { newpw: [''],
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
        birthday: [formatDate(this.user.birthday, 'yyyy-MM-dd', 'en'), Validators.required],
       
        gender: [this.user.gender],
        role: [this.user.role, Validators.required],
        confirmpassword: ['']
      },  { 
      validator: ConfirmedValidator('newpw', 'confirmpassword')
    }
    );
   
  }





  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

//
submitted = false;
  onClickSubmit() {
    this.submitted = true;

    console.log(this.form.value)

 }
}
