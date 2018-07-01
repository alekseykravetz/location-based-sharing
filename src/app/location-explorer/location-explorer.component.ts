import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/models/message';
import { IEvent } from 'src/app/models/event';

@Component({
  selector: 'lbs-location-explorer',
  templateUrl: './location-explorer.component.html',
  styleUrls: ['./location-explorer.component.css']
})
export class LocationExplorerComponent implements OnInit {

  messages$: Observable<IMessage[]>;
  events$: Observable<IEvent[]>;

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.messages$ = this.dbService.getMessages();
    this.events$ = this.dbService.getEvents();
  }

}
