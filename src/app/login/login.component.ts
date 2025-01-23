import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SharedService } from '../shared.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private sharedService: SharedService) {}

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordControl.valid) {
      const email = this.emailFormControl.value; 
      const password = this.passwordControl.value; 

      console.log('Form Submitted', {
        email,
        password,
      });
    } else {
      console.log('Form is invalid');
    }
  }

  goToSignUp() {
    this.sharedService.moveDiv('signup');
  }
}
