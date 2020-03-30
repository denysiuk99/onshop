import {Injectable} from '@angular/core';
import {CartItemModel} from './entities';
import {Product} from '../entities';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _itemsPrice = 0;
  private _items: Array<CartItemModel> = [];


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

  get getItems(): Array<CartItemModel> {
    return this._items;
  }
  constructor(private router: Router) {
    const items = JSON.parse(localStorage.getItem('CART_KEY'));
    this._items = items ? items : [];
    this._itemsPrice = this.calculatePrice(this._items);
  }
  public addItem(item: CartItemModel, amount: number = 1) {

    item.count = amount;

    const index = this._items.findIndex(r => r.id === item.id);
    if (index > -1) {
      this._items[index].count++;
      this._items[index].price += item.price;
    } else {
      this._items.push(item);
    }
    this._itemsPrice = this.calculatePrice(this._items);
    localStorage.setItem('CART_KEY', JSON.stringify(this._items));
  }

  private calculatePrice(items: Array<CartItemModel>): number {
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
      localStorage.setItem('CART_KEY', JSON.stringify(this._items));
    }
  }

  public clearCart() {
    this._items = [];
    this._itemsPrice = 0;
    localStorage.setItem('CART_KEY', JSON.stringify([]));
  }
}


