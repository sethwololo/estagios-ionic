import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Home } from '../models/home.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends Firestore<Home> {

  constructor(db: AngularFirestore) {
    super(db);
    this.init();
   }

  private init(): void {
    this.setCollection(`/estagios/`/*, (ref: firestore.CollectionReference) => {
      return ref.orderBy('date', 'desc');
    }*/);
    return;
  }
}
