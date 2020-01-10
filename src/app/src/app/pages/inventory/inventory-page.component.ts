import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../_core';
import {ShopRepository} from '../../../_data/repository';

@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent {
  /// fields
  public products: Array<Product> = [];

  /// predicates
  public isLoaded = false;


  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository) {
    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }
}
