import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationRoutingModule } from './prestation-routing.module';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule
  ],
  declarations: [ListPrestationsComponent]
})
export class PrestationModule { }
