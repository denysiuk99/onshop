import {Component} from '@angular/core';
import {CartService} from '../../../_core/cart';

@Component({
  selector: 'app-order-number-page',
  templateUrl: './order-number-page.component.html'
})

export class OrderNumberPageComponent {
  public getOrderNumber() {
    return ('AH ') + Math.floor(+ (Math.random() * 1000000 ) + 1000);
  }
  constructor(public cartService: CartService) {
  }
}
