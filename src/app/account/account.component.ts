import { Component, OnDestroy } from '@angular/core';
import { User } from 'firebase';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'lbs-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnDestroy {

  user: User;
  subscription: Subscription;

  constructor(
    private router: Router,
    public accountService: AccountService) {

    this.subscription = this.accountService.user$.subscribe(user => {
      this.user = user;
      if (this.user === null) {
        this.doLogout();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doLogin() {
    this.accountService.login();
  }

  doLogout() {
    this.accountService.logout();
    this.router.navigate(['']);
  }
}
