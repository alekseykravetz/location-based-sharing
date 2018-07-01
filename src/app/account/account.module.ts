import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AccountService } from 'src/app/account/account.service';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  exports: [
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
  ],
  providers: [
    AccountService
  ],
})
export class AccountModule { }
