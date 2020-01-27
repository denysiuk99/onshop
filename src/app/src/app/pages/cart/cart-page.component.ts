import {Component} from '@angular/core';
import {CartService} from '../../../_core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent {
  constructor(public cartService: CartService) {
  }
}
