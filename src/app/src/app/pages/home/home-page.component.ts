import {Component} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ShopRepository} from '../../../_data/repository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {
  public products: Array<Product> = [];
  public categories: Array<Categories> = [];

  /// predicate
  public didLoaded = false;

  constructor(private shopRepository: ShopRepository) {
  }

}
