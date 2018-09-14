import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() prestaToEdit: Prestation;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta : [
        this.prestaToEdit ? this.prestaToEdit.type_presta : this.initPrestation.type_presta,
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      client : [
        this.prestaToEdit ? this.prestaToEdit.client : this.initPrestation.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      nb_jours : [this.prestaToEdit ? this.prestaToEdit.nb_jours : this.initPrestation.nb_jours],
      taux_tva : [this.prestaToEdit ? this.prestaToEdit.taux_tva : this.initPrestation.taux_tva],
      tjm_ht   : [this.prestaToEdit ? this.prestaToEdit.tjm_ht : this.initPrestation.tjm_ht],
      state    : [this.prestaToEdit ? this.prestaToEdit.state : this.initPrestation.state]
    });
  }

  private getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.prestaToEdit) {
      return data;
    }
    const id = this.prestaToEdit.id;
    return {id, ...data};
  }

  public process(): void {
    const item = new Prestation(this.form.value);
    this.nItem.emit(this.getItem(this.form.value));
  }

  public isError(champs): boolean {
    if (!this.form.get(champs).valid && this.form.get(champs).touched) {
      return true;
    }
  }
}

