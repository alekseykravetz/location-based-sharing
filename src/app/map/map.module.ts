import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';

import { DatabaseModule } from 'src/app/database/database.module';
import { MapComponent } from './map.component';

@NgModule({
    declarations: [
        MapComponent,
    ],
    exports: [
        MapComponent,
    ],
    imports: [
        BrowserModule,
        DatabaseModule,
        
       AgmCoreModule.forRoot({ apiKey: 'AIzaSyBMqzryEHwWQ2bTTtBKStPom_iYTd_RT8M' }),
 ],
    providers: [],
})
export class MapModule { }
