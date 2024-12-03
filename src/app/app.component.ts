import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideNativeDateAdapter()],
})
export class AppComponent {
  title = 'My-Form';

  email: string = '';
  password: string = '';
  agree: boolean = false;
  submitAttempted: boolean = false;
  isMoved: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8), 
  ]);

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    this.submitAttempted = true;

    if (this.emailFormControl.valid && this.passwordControl.valid) {
      console.log('Form Submitted', {
        email: this.email,
        password: this.password,
      });
    } else {
      console.log('Form is invalid');
    }
  }
  toggleContent() {
    this.isMoved = !this.isMoved; 
  }
}
