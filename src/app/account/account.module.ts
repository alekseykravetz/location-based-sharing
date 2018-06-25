import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AccountService } from "src/app/account/account.service";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,

    AngularFireAuthModule,
  ],
  providers: [AccountService],
})
export class AccountModule { }