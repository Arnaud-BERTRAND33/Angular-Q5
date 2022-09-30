import { Component } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = new User("", "", "", "");

  constructor() {
  }

  onSubmit(): void {
    console.log('Formulaire envoyé !');
  }
}
