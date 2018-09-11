import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  type_presta: string;
  client: string;
  nb_jours: number;
  taux_tva = 20;
  tjm_ht: number;
  state = State.OPTION;
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    if (!this.nb_jours || !this.tjm_ht) {
      return 0;
    }

    return this.nb_jours * this.tjm_ht;
  }

  totalTTC(tva?: number): number {
    const totalHT = this.totalHT();

    if (!this.taux_tva) {
      this.taux_tva = 0;
    }

    if (!tva) {
      tva = this.taux_tva;
    }

    if (tva <= 0) {
      tva = 0;
    }

    return totalHT + (tva * totalHT / 100);
  }
}
