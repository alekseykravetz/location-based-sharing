import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LocationExplorerComponent } from './location-explorer/location-explorer.component';
import { MessagePublisherComponent } from 'src/app/message-publisher/message-publisher.component';
import { EventPublisherComponent } from 'src/app/event-publisher/event-publisher.component';


const routes: Routes = [
    { path: '', component: LocationExplorerComponent },
    { path: 'explorer', component: LocationExplorerComponent },
    { path: 'message-publisher', component: MessagePublisherComponent },
    { path: 'event-publisher', component: EventPublisherComponent },
    { path: '**', component: NotFoundComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
