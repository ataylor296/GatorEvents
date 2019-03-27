import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { Observable } from 'rxjs'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Event } from '../../models/event.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})
export class TestdbComponent implements OnInit {

  constructor(private db: DatabaseService, private afs: AngularFirestore) { }

  eventCollectionRef: AngularFirestoreCollection<Event>;
  event$: Observable<Event[]>;
  event2$;
  user$;
  users$;

  ngOnInit() {
    this.event$ = this.db.getEvents();
    /*
    let newEvent = <Event>({
      id: "coolid",
      address: "2900 SW 23rd Ter, Gainesville, FL 32608",
      datetime: this.db.now(),
      name: "event creation!",
      organizer: "coolorganizer",
      subscribers: ["coolguy1"],
      attendees: ["coolguy1"],
    });
    this.db.addEvent(newEvent);
     */
    this.event2$ = this.db.getEvent("jiookMMIm0q81GESqkW4");
    this.user$ = this.db.getUserByUsername("deputy98");
    //this.user$ = this.db.getUserById("7RgsSbVBUUxL5hxCOoQL");
    this.users$ = this.db.getAllUsers();

    let newUser = <User>({
      email: "coolemail@email.com",
      username: "deputy98"
    });

    //this.db.addUser(newUser);
  }


}
