import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableauComponent, TotalPipe],
  exports: [TableauComponent, TotalPipe]
})
export class SharedModule { }
