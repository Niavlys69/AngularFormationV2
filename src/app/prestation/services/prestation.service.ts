import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Prestation } from '../../shared/models/prestation-m';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  public message$: Subject<string> = new Subject();

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        const tab = [];
        data.forEach((res) => {
          tab.push(new Prestation(res));
        });
        return tab;
      })
    );
  }

  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  public add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }

  public update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Prestation): Promise<any> {
    const presta  = {...item};
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }

  public get(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
  }
}
