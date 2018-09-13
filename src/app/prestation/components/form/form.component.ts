import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public states: State[] = Object.values(State);
  public newItem: Prestation = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public process(): void {
    // console.log(this.newItem);
    this.nItem.emit(this.newItem);
  }

}
