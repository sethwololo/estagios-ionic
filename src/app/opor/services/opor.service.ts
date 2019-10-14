import { Injectable } from '@angular/core';
import { Opor } from '../models/opor.model';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OporService extends Firestore<Opor> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/estagios/`/*, (ref: firestore.CollectionReference) => {
          return ref.orderBy('date', 'desc');
        }*/);
        return;
      }
      this.setCollection(null);
    });
  }
}
