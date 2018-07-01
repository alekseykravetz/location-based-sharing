import { AppShellModule } from './app-shell/app-shell.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { AccountModule } from 'src/app/account/account.module';
import { DatabaseModule } from 'src/app/database/database.module';
import { LocationExplorerModule } from 'src/app/location-explorer/location-explorer.module';
import { AppRoutingModule } from './app.routing';
import { MessagePublisherModule } from 'src/app/message-publisher/message-publisher.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    AccountModule,
    DatabaseModule,
    LocationExplorerModule,
    AppShellModule,
    MessagePublisherModule,

    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
