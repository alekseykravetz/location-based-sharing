import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DatabaseModule } from 'src/app/database/database.module';
import { MessagePublisherComponent } from './message-publisher.component';

@NgModule({
    declarations: [
        MessagePublisherComponent,
    ],
    exports: [
        MessagePublisherComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DatabaseModule,
    ],
    providers: [],
})
export class MessagePublisherModule { }
