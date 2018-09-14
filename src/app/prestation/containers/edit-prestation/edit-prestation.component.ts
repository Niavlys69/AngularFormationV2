import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Prestation } from '../../../shared/models/prestation-m';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  public presta: Prestation;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.presta = data.prestation;
    });
  }

  public update(presta: Prestation): void {
    this.prestationService.update(presta).then(() => {
      this.router.navigate(['/prestations']);
    });
  }

}
