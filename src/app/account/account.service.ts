import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user$: Observable<User>;
  user: User;

  constructor(private authService: AngularFireAuth) {
    this.user$ = this.authService.authState;
    this.user$.subscribe(user => {
      console.log('authState changed ' + user);
      this.user = user;
    });
  }

  login() {
    this.authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.authService.auth.signOut();
  }
}
