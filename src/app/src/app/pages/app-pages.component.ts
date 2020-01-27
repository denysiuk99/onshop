import {Component} from '@angular/core';
import {CartService} from '../../_core';
import {ShopRepository} from '../../_data';

@Component({
  selector: 'app-pages',
  styleUrls: ['./app-pages.component.scss'],
  templateUrl: './app-pages.component.html'
})
export class AppPagesComponent {

  constructor(public cartService: CartService, public shopRepository: ShopRepository) {
  }

}
