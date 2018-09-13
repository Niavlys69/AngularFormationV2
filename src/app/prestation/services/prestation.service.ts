import { Injectable } from '@angular/core';

import { Prestation } from '../../shared/models/prestation-m';
import { fakeCollection } from './fakeCollection';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get presta by id

  // update presta
  public update(presta: Prestation, state?: State) {
      const prestaToUpdate = {...presta}; // Permet de recréer l'objet - Evite de modifier la vue avant l'enregistrement en BDD
      // Appel API
  }

  // delete presta

  // add presta
  public add(presta: Prestation): void {
    this.collection.push(presta);
  }
}
