import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AccountService } from 'src/app/account/account.service';
import { DatabaseService } from 'src/app/database/database.service';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'lbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private accountService: AccountService,
    private dbService: DatabaseService) {

  }

  doLogin() {
    this.accountService.login();
  }

  doLogout() {
    this.accountService.logout();
  }

  createMessage() {
    this.dbService.createMessage('test message');
  }
}
