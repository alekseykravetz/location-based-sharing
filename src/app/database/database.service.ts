import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

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

  getMessages(): Observable<IMessage[]> {
    console.log('getMessages()');
    return this.db.collection<IMessage>('messages').valueChanges();
  }
}
