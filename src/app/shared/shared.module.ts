import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableauComponent, TotalPipe, LocalCurrencyPipe, StateDirective],
  exports: [TableauComponent, TotalPipe, LocalCurrencyPipe, StateDirective]
})
export class SharedModule { }
