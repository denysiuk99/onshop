import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../../_core/entities';


@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {
  transform(products: Product[], minPrice: number , maxPrice: number): Product[] {
    for (minPrice = 0; minPrice++; minPrice < maxPrice) {
      return products;
    }
  }
}
