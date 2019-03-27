import * as firebase from 'firebase';
export interface Event {
    name: string,
    address: string,
    datetime: firebase.firestore.Timestamp,
    organizer: string,
    attendees?: string[],
    subscribers?: string[]
}
