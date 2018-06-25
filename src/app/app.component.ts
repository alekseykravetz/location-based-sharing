import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AccountService } from "src/app/account/account.service";

@Component({
  selector: 'lbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'lbs';

  constructor(private accountService: AccountService) {
  }

  doLogin() {
    this.accountService.login();
  }

  doLogout() {
    this.accountService.logout();
  }
}
