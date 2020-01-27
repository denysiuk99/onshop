import {Injectable} from '@angular/core';
import {CartItemEntity} from './entities';
import {Product} from '../entities';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _itemsPrice = 0;
  private _items: Array<CartItemEntity> = [];


  get totalPrice() {
    return this._itemsPrice.toFixed(2);
  }

  get itemsCount() {
    let count = 0;
    for (const item of this._items) {
      count += item.count;
    }

    return count;
  }

  get getItems(): Array<CartItemEntity> {
    return this._items;
  }

  public addItem(item: CartItemEntity, amount: number = 1) {

    item.count = amount;
/*
    item.price = amount * item.price;
*/
    const index = this._items.findIndex(r => r.id === item.id);
    if (index > -1) {
      this._items[index].count++;
      this._items[index].price += item.price;
    } else {
      this._items.push(item);
    }
    this._itemsPrice = this.calculatePrice(this._items);
  }

  private calculatePrice(items: Array<CartItemEntity>): number {
    let price = 0;
    for (const item of items) {
      price += Number(item.price);
    }
    return price;
  }

  public removeItem(id: number) {
    const index = this._items.findIndex(r => r.id = id);
    if (index > -1) {
      this._items.splice(index, 1);
      this._itemsPrice = this.calculatePrice(this._items);
    }
  }

  public clearCart() {
    this._items = [];
    this._itemsPrice = 0;
  }
}


