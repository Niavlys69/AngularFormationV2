import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { CurrencyPipe, getLocaleCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private cp: CurrencyPipe
  ) {

  }
  transform(value: any, args?: any): any {
    return this.cp.transform(value, getLocaleCurrencySymbol(this.locale));
  }

}
