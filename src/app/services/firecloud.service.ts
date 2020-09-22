import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirecloudService {

  constructor(private fireStore: AngularFirestore) { }
  readonly collectionName = 'usuarios';
  LeerUsuarios()
  {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }
}
