import { Prestation } from '../../shared/models/prestation-m';

export const fakeCollection: Prestation[] = [
  new Prestation(
    {
      id: 'a1',
      type_presta: 'Formation',
      client: 'Arkesys',
      nb_jours: 2,
      tjm_ht: 500
    }
  ),
  new Prestation(
    {
      id: 'b1',
      type_presta: 'Prestation',
      client: 'Modis',
      nb_jours: 5,
      tjm_ht: 700
    }
  )
];
