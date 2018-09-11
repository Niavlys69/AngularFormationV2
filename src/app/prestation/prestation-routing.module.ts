import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListPrestationsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationRoutingModule { }
