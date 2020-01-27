import {Component, Input} from '@angular/core';
import {CartService} from '../../_core/cart';
import {CartItemEntity} from '../../_core/cart';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private cartService: CartService) {
  }
}
