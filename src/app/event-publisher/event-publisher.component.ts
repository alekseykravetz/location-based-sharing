import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/models/message';
import { IEvent } from 'src/app/models/event';

@Component({
  selector: 'lbs-event-publisher',
  templateUrl: './event-publisher.component.html',
  styleUrls: ['./event-publisher.component.css']
})
export class EventPublisherComponent {

  event: IEvent = {content: '', location: '', title: '', date: new Date()} as IEvent;

  constructor(private dbService: DatabaseService) { }

  publish() {
    this.dbService.createEvent(this.event);
  }

}
