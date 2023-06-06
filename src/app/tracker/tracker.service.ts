import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc
} from '@angular/fire/firestore';
import { Tracker } from './tracker.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TrackerService {

  constructor(private fireStore: Firestore) { }

  /**
   * @name addData
   * @description add data into firebase
   */
  public addData(tracker: Tracker) {
    tracker.id = doc(collection(this.fireStore, 'id')).id;
    return addDoc(collection(this.fireStore, 'Tracker'), tracker);
  }

  /**
   * @name getData
   * @description gets data from firebase
   */
  public getData(): Observable<Tracker[]> {
    let trackerRef = collection(this.fireStore, 'Tracker');
    return collectionData(trackerRef, { idField: 'id' }) as Observable<Tracker[]>;
  }

  /**
   * @name deleteData
   * @description deletes data from firebase
   */
  public deleteData(tracker: Tracker) {
    let docRef = doc(this.fireStore, `Tracker/${tracker.id}`);
    return deleteDoc(docRef);
  }

  /**
   * @name updateData
   * @description updates the data in firebase
   */
  public updateData(tracker: Tracker, data: any) {
    let docRef = doc(this.fireStore, `Tracker/${tracker.id}`);
    return updateDoc(docRef, data);
  }
}
