import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableauComponent],
  exports: [TableauComponent]
})
export class SharedModule { }
