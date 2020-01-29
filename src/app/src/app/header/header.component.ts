import {Component, Input} from '@angular/core';
import {CartService} from '../../_core/cart';
import {Product} from '../../_core/entities';
import {mocks} from '../../_data/repository/mock';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../_data/repository';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
/*
  public products: Array<Product> = [];
*/

  /// constructor
  constructor(private test: ShopRepository, private cartService: CartService) {
  /*this.products = mocks.products;*/
  }

}

