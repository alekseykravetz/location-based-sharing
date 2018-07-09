import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app.routing';

import { DatabaseModule } from 'src/app/database/database.module';

import { AppShellModule } from './app-shell/app-shell.module';
import { AccountModule } from 'src/app/account/account.module';
import { LocationExplorerModule } from 'src/app/location-explorer/location-explorer.module';
import { MessagePublisherModule } from 'src/app/message-publisher/message-publisher.module';
import { EventPublisherModule } from 'src/app/event-publisher/event-publisher.module';
import { MapModule } from 'src/app/map/map.module';

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

    AppShellModule,
    AccountModule,
    DatabaseModule,
    LocationExplorerModule,
    MessagePublisherModule,
    EventPublisherModule,
    MapModule,

    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
