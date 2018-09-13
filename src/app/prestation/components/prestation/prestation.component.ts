import { Component, OnInit, Input } from '@angular/core';

import { Prestation } from '../../../shared/models/prestation-m';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() presta: Prestation;
  public states = Object.values(State);
  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
  }

  public update(e): void {
    const state = e.target.value;
    // this.presta.state = state; // Supprimer après enregistre en BDD
    this.prestationService.update(this.presta, state).then(() => {
      this.presta.state = state;
    });
  }

  public delete(): void {
    this.prestationService.delete(this.presta).then((res) => {
      console.log(res);
    });
  }
}
