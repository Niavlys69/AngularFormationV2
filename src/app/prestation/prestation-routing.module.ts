import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListPrestationsComponent
  },
  {
    path: 'add',
    component: AddPrestationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrestationRoutingModule { }
