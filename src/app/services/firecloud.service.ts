import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirecloudService {

  constructor(private fireStore: AngularFirestore) { }
  readonly collectionName = 'usuarios';
  LeerUsuarios()   {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }
  public create(user) {
    return new Promise<any>((resolve, reject) => {
      this.fireStore.collection(this.collectionName).add(user).then(rest => { }, err => reject(err));
    });
  }

  public nuevaCarga(user: string, monto: Array<number>) {
    let creditos = this.fireStore.collection(this.collectionName).doc(user);

    // Set the "capital" field of the city 'DC'
    return creditos.update({
      cargas: monto
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });

  }


  readCollection(collection: string) {
    return this.fireStore.collection(collection).snapshotChanges();
  }
}
