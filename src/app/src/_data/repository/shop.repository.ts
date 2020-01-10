import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Product} from '../../_core';
import {mocks} from './mock';

@Injectable()
export class ShopRepository {

  /// constructor
  constructor() {
  }

  /// methods
  public getProducts(categoryId: number): Array<Product> {
    const products = [];
    for (const item of mocks.products) {
      if (item.categoryId === categoryId) {
        products.push(item);
      }
    }

    return products;
  }
}
