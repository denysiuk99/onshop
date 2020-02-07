import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../_core/entities';
import {HeaderComponent} from '../header';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string = ''): Product[] {
    if (!search.trim()) {
       return products;
    }

    return products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
