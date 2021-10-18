import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedPrice',
})
export class FixedPricePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return `${value.toFixed(2)}`;
  }
}
