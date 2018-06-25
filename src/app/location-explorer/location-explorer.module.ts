import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatabaseModule } from "src/app/database/database.module";
import { LocationExplorerComponent } from './location-explorer.component';

@NgModule({
    declarations: [
        LocationExplorerComponent,
    ],
    exports: [
        LocationExplorerComponent,
    ],
    imports: [
        BrowserModule,
        DatabaseModule,
    ],
    providers: [],
})
export class LocationExplorerModule { }