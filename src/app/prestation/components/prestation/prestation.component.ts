import { Component, OnInit, Input } from '@angular/core';

import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() presta: Prestation;
  constructor() { }

  ngOnInit() {
  }

}
