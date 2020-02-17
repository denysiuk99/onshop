import {Component, OnInit} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../../_data/repository';
import {CartService} from '../../../_core/cart';
import {AppMapper} from '../../_mapper';
import {HttpClient} from '@angular/common/http';
import {SearchResult, Vehicle} from '../../../_data/models';

@Component({
  selector: 'app-product-details-page',
  styleUrls: ['./product-details-page.component.scss'],
  templateUrl: './product-details-page.component.html'
})
export class ProductDetailsPageComponent implements OnInit {
  public items: Array<Vehicle> = [];
  public searchResult: SearchResult;

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private cartService: CartService, private http: HttpClient) {
    this.searchResult = new SearchResult();
    this.route.params.subscribe((data) => {
      this.items = this.test.getProduct(String(data.vin));
    });
  }

  ngOnInit() {
    this.http.get(`https://dealeractive-api-prod.azurewebsites.net/cars/search/?vin=KNALT4D35H6035011`)
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
      });
  }

  public addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }
}
