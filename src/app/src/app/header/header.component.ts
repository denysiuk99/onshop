import {Component, Input} from '@angular/core';
import {CartService} from '../../_core/cart';
import {mocks} from '../../_data/repository/mock';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../_data/repository';
import {Product} from '../../_core/entities';


@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search = '';
  products: Array<Product> = [];
  showDropDown = false;


  /// constructor
  constructor(private test: ShopRepository, private cartService: CartService) {
    this.products = mocks.products;
  }

  showSearchResult() {
    if (this.search !== '') {
      return !this.showDropDown;
    }
  }


  /*submit(search) {
    if (search === '') {
      return console.log('Empty Field');
    } else {
      console.log('Field is not empty');
    }
  }*/
}

