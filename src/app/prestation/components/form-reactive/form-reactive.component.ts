import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(State);
  private initPrestation = new Prestation;
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta : [
        this.initPrestation.type_presta,
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      client : [
        this.initPrestation.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      nb_jours : [this.initPrestation.nb_jours],
      taux_tva : [this.initPrestation.taux_tva],
      tjm_ht   : [this.initPrestation.tjm_ht],
      state    : [this.initPrestation.state]
    });
  }

  public process(): void {
    const item = new Prestation(this.form.value);
    this.nItem.emit(item);
  }

  public isError(champs): boolean {
    if (!this.form.get(champs).valid && this.form.get(champs).touched) {
      return true;
    }
  }
}

