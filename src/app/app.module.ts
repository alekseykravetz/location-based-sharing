import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
/*import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';*/

import { AppComponent } from './app.component';
import { AccountModule } from "src/app/account/account.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AccountModule,
    
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
