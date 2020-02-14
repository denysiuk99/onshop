import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopRepository} from '../../../_data';
import {Product} from '../../../_core/entities';
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
  public productClick(id: number) {
    this.router.navigate([`product/${id}`]);
  }

  /*
    public addToCart(item: Product) {
      this.cartService.addItem(AppMapper.toCartItem(item));
    }*/

  addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }
}

export class SearchResult {
  public page: number;
  public pageSize: number;
  public items: Array<Vehicle>;

  constructor() {
    this.items = new Array<Vehicle>();
  }

  mapFromDto(dto: any) {
    this.page = dto.page;
    this.pageSize = dto.page_size;
    for (const item of dto.items) {
      const entity = new Vehicle();
      entity.mapFromDto(item);
      this.items.push(entity);
    }
  }
}

export class Vehicle {
  public id: number;
  public title: string;
  public make: string;
  public model: string;
  public year: number;
  public price: number;
  public externalImages: string;

  constructor() {
  }

  mapFromDto(dto: any) {
    this.id = dto.id;
    this.title = dto.title;
    this.make = dto.make;
    this.model = dto.model;
    this.year = dto.year;
    this.price = dto.price;
    this.externalImages = dto.externalImages;
  }
}
