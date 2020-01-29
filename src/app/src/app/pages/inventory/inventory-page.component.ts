import {Component, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopRepository} from '../../../_data';
import {Product} from '../../../_core/entities';
import {CartService} from '../../../_core';
import {AppMapper} from '../../_mapper';

@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent {
  /// fields
  public products: Array<Product> = [];

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private router: Router, private cartService: CartService) {
    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }

  /// methods
  public productClick(productId: number) {
    this.router.navigate([`product/${productId}`]);
  }

  public addToCart(item: Product) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }
}
