import {Component, OnInit} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../../_data/repository';
import {CartService} from '../../../_core/cart';
import {AppMapper} from '../../_mapper';
import {HttpClient} from '@angular/common/http';
import {FilterNew, SearchResult, Vehicle} from '../../../_data/models';

@Component({
  selector: 'app-product-details-page',
  styleUrls: ['./product-details-page.component.scss'],
  templateUrl: './product-details-page.component.html'
})
export class ProductDetailsPageComponent implements OnInit {
  public vehicle: Vehicle;
  public showSpinner = true;

  /// constructor
  constructor(private route: ActivatedRoute, private shopRepository: ShopRepository, private cartService: CartService, private http: HttpClient) {
    this.vehicle = new Vehicle();
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.http.get(`https://dealeractive-api-prod.azurewebsites.net/cars/search/?vin=${data.vin}`)
        .subscribe(result => {
          const searchResult = new SearchResult();
          searchResult.mapFromDto(result);
          this.vehicle = searchResult.items[0];
          this.showSpinner = false;
        });
    });
  }

  public addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }

}
