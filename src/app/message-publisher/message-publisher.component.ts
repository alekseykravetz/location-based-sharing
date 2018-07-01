import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'lbs-message-publisher',
  templateUrl: './message-publisher.component.html',
  styleUrls: ['./message-publisher.component.css']
})
export class MessagePublisherComponent {

  message: IMessage = {content: '', location: ''} as IMessage;

  constructor(private dbService: DatabaseService) { }

  publish() {
    this.dbService.createMessage(this.message);
  }

}
