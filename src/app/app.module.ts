import { AppShellModule } from './app-shell/app-shell.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { AccountModule } from 'src/app/account/account.module';
import { DatabaseModule } from 'src/app/database/database.module';
import { LocationExplorerModule } from 'src/app/location-explorer/location-explorer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AccountModule,
    DatabaseModule,
    LocationExplorerModule,
    AppShellModule,

    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
