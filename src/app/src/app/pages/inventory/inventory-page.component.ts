import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResult, ShopRepository, Vehicle} from '../../../_data';
import {Categories, Product} from '../../../_core/entities';
import {CartService} from '../../../_core';
import {AppMapper} from '../../_mapper';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent implements OnInit {
  /// fields
  public products: Array<Product> = [];
  public searchResult: SearchResult;

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private router: Router, private cartService: CartService, private http: HttpClient) {
    this.searchResult = new SearchResult();
    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }

  ngOnInit() {
    this.http.get('https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld&pagesize=15&sort=msrp_desc')
      .subscribe(result => {
        console.log(result);
        this.searchResult.mapFromDto(result);
      });
  }

  /// methods
  public productClick(vin: string) {
    this.router.navigate([`product/${vin}`]).then();
  }

  /*
    public addToCart(item: Product) {
      this.cartService.addItem(AppMapper.toCartItem(item));
    }*/


  public addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }


}

