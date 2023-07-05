import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc, orderBy, query } from '@angular/fire/firestore';
import { Transactions } from './transactions.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private fireStore: Firestore) { }

  /**
   * @name addData
   * @description Adds data into the Firebase
   */
  public addData(user: Transactions) {
    user.id = doc(collection(this.fireStore, 'id')).id;
    return addDoc(collection(this.fireStore, 'User'), user);
  }

  /**
   * @name getData
   * @description Fetches the data from Firebase 
   */
  public getData(): Observable<Transactions[]> {
    let userRef = collection(this.fireStore, 'User');
    const q = query(userRef, orderBy("date", "desc"));
    console.log(q);

    return collectionData(q, { idField: 'id' }) as Observable<Transactions[]>;
  }
  // public getLatestDocument(): Observable<Transactions> {
  //   return this.fireStore.collection().ref('myUsers').orderByChild("age").limitToLast(3);
  //   return this.fireStore.collection('yourCollectionName', queryFn).valueChanges();
  // }

  /**
   * @name deleteData
   * @description Deletes data from Firebase
   */
  public deleteData(user: string) {
    let docRef = doc(this.fireStore, `User/${user}`);
    return deleteDoc(docRef);
  }

  /**
   * @name updateData
   * @description Updates the data
   */
  public updateData(user: Transactions, data: any) {
    let docRef = doc(this.fireStore, `User/${user.id}`);
    return updateDoc(docRef, data);
  }
}
