import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc, CollectionReference } from '@angular/fire/firestore';
import { User } from './registration.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(private fireStore: Firestore) { }

  /**
   * @name addData
   * @description Adds data into the Firebase
   */
  public addData(user: User) {
    user.id = doc(collection(this.fireStore, 'id')).id;
    return addDoc(collection(this.fireStore, 'User'), user);
  }

  /**
   * @name getData
   * @description Fetches the data from Firebase 
   */
  public getData(): Observable<User[]> {
    let userRef = collection(this.fireStore, 'User');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  /**
   * @name deleteData
   * @description Deletes data from Firebase
   */
  public deleteData(user: User) {
    let docRef = doc(this.fireStore, `user/${user.id}`);
    return deleteDoc(docRef);
  }

  /**
   * @name updateData
   * @description Updates the data
   */
  public updateData(user: User, data: any) {
    let docRef = doc(this.fireStore, `User/${user.id}`);
    return updateDoc(docRef, data);
  }
}
