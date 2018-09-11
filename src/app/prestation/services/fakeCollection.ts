import { Prestation } from '../../shared/models/prestation-m';
import { State } from '../../shared/enums/state.enum';

export const fakeCollection: Prestation[] = [
  new Prestation(
    {
      id: 'a1',
      type_presta: 'Formation',
      client: 'Arkesys',
      nb_jours: 2,
      tjm_ht: 500,
      state: State.OPTION
    }
  ),
  new Prestation(
    {
      id: 'b1',
      type_presta: 'Prestation',
      client: 'Modis',
      nb_jours: 5,
      tjm_ht: 700,
      state: State.CONFIRME
    }
  )
];
