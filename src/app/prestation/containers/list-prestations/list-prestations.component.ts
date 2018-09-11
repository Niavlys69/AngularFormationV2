import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public listHeaders: string[];
  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.listHeaders = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action'
    ];
  }

}
