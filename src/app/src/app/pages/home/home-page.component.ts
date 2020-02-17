import {Component} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ShopRepository} from '../../../_data/repository';
import {mocks} from '../../../_data/repository/mock';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../inventory';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {
  public products: Array<Vehicle> = [];
  public categories: Array<Categories> = [];

  /// predicate
  public didLoaded = false;

  constructor(private router: Router, private shopRepository: ShopRepository) {
    this.products = new Array<Vehicle>();
    this.categories = mocks.categories;
  }

}
