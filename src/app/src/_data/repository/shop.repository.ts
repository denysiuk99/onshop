import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {mocks} from './mock';
import {Categories, Product} from '../../_core/entities';

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

  public getProduct(productId: number): Array<Product> {
    const products = [];
    for (const item of mocks.products) {
      if (item.productId === productId) {
        products.push(item);
      }
    }
    return products;
  }
}
