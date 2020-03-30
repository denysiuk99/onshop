import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../../_core/entities';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string = ''): Product[] {
    if (!search.trim()) {
       return products;
    }

    const filtered = products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });

    return filtered.slice(0, 5);
  }

}
