import {Component, OnInit} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../../_data/repository';
import {CartService} from '../../../_core/cart';
import {AppMapper} from '../../_mapper';

@Component({
  selector: 'app-product-details-page',
  styleUrls: ['./product-details-page.component.scss'],
  templateUrl: './product-details-page.component.html'
})
export class ProductDetailsPageComponent {
  public products: Array<Product> = [];

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private cartService: CartService) {
    this.route.params.subscribe((data) => {
      this.products = this.test.getProduct(Number(data.productId));
    });
  }

  public addToCart(item: Product) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }
}
