import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation-m';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public listHeaders: string[];
  private sub: Subscription;
  // public addPresta = { libelle: 'Add Prestation', route: '/prestations/add' };
  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.listHeaders = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
      ''
    ];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
