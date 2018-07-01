import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  createMessage(message: IMessage) {
    console.log('createMessage()');
    message.id = this.db.createId();
    this.db.collection<IMessage>('messages').add(message);
  }

  createEvent(event: IEvent) {
    console.log('createEvent()');
    event.id = this.db.createId();
    this.db.collection<IEvent>('events').add(event);
  }

  getMessages(): Observable<IMessage[]> {
    console.log('getMessages()');
    return this.db.collection<IMessage>('messages').valueChanges();
  }

    getEvents(): Observable<IEvent[]> {
    console.log('getEvents()');
    return this.db.collection<IEvent>('events').valueChanges();
  }
}
