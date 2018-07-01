import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DatabaseModule } from 'src/app/database/database.module';
import { EventPublisherComponent } from './event-publisher.component';

@NgModule({
    declarations: [
        EventPublisherComponent,
    ],
    exports: [
        EventPublisherComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DatabaseModule,
    ],
    providers: [],
})
export class EventPublisherModule { }
