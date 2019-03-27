import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Event } from './models/event.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  u_endpt = 'users';
  e_endpt = 'events';

  eventCollectionRef: AngularFirestoreCollection<Event>;
  userCollectionRef: AngularFirestoreCollection<User>;
  events$: Observable<Event[]>;
  users$;

  constructor(private afs: AngularFirestore) {
    this.eventCollectionRef = this.afs.collection<Event>(this.e_endpt);
    this.events$ = this.eventCollectionRef.valueChanges();
    this.userCollectionRef = this.afs.collection<User>(this.u_endpt);
    this.users$ = this.userCollectionRef.valueChanges();
  }

  /* User CRUD */

  // ADD USER. TESTED
  addUser(user: User){
    return this.afs.collection(this.u_endpt).add(user);
  }

  // GET USER. NOT WORKING
  getUserByUsername(username: string) {
    return  this.afs.collection(this.u_endpt, ref => ref.where('username', '==', username));
  }
  // TESTED
  getAllUsers() {
    return this.users$;
  }
  // TESTED
  getUserById(userId: string) {
    return this.afs.doc<User>(`users/${userId}`).valueChanges();
  }

  

  // GET EVENTS. TESTED.
  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  // ADD EVENTS. TESTED.
  addEvent(event: Event) {
    this.eventCollectionRef.add(event);
  }

  // Get event by its string id. TESTED.
  getEvent(id: string){
    return this.afs.doc<Event>(`events/${id}`).valueChanges();
  }

  // Returns current timestamp. TESTED.
  now(){
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
