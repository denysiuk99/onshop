import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {mocks} from './mock';
import {Categories, Product} from '../../_core/entities';
import {Vehicle} from '../models';


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

  public getProduct(vin: string): Array<Vehicle> {
    const items = [];
    for (const item of Array<Vehicle>()) {
      if (item.vin === vin) {
        items.push(item);
      }
    }
    return items[0];
  }
}
