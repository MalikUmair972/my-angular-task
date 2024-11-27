import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-task';

  email: string = '';
  lastName: string = '';
  agree: boolean = false;
  submitAttempted: boolean = false;
}
