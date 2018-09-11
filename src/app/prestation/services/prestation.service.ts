import { Injectable } from '@angular/core';

import { Prestation } from '../../shared/models/prestation-m';
import { fakeCollection } from './fakeCollection';

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

  // delete presta

  // add presta
}
