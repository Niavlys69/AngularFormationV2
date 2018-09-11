import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationRoutingModule } from './prestation-routing.module';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent]
})
export class PrestationModule { }
