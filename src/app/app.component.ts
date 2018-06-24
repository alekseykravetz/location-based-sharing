import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'lbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lbs';

  user$: Observable<User>;
  user: User;

  constructor(private authService: AngularFireAuth) {
    this.user$ = this.authService.authState;
    this.user$.subscribe(user => {
      console.log('authState changed ' + user);
      this.user = user;
    });
  }

  doLogin() {
    this.authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  doLogout() {
    this.authService.auth.signOut();
  }
}
