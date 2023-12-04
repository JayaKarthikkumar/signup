import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn,  } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const Password = control.get('Password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;


    if (Password && confirmPassword && Password !==confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  

  signUpForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  constructor() {}
  
  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }

  
  get email() {
    return this.signUpForm.get('name');
  }

  
  get password() {
    return this.signUpForm.get('name');
  }

  
  get confirmpassword() {
    return this.signUpForm.get('name');
  }
}
