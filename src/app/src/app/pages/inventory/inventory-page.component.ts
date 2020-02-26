import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterNew, SearchResult, ShopRepository, Vehicle} from '../../../_data';
import {Categories, Product} from '../../../_core/entities';
import {CartService} from '../../../_core';
import {AppMapper} from '../../_mapper';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent implements OnInit {
  /// fields
  public products: Array<Product> = [];
  public searchResult: SearchResult;
  public showSpinner = true;
  public vehicle: Vehicle;
  public filters: FilterNew;
  public vehicleYear = '2016';
  public filterItems: any;
  public showMainContent = false;


  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private router: Router, private cartService: CartService, private http: HttpClient) {
    this.vehicle = new Vehicle();
    this.filters = new FilterNew();
    this.searchResult = new SearchResult();

    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }

  ngOnInit() {
    this.http.get('https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld&pagesize=15&sort=msrp_desc')
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
        this.showSpinner = false;
      });
  }

  public selectYear() {
    let params = new HttpParams();
    params = params.append('year', this.vehicleYear);
    /*
    params = params.append('pagesize', '30');
    params = params.append('pagesize', '60');
    */
    this.http.get('https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld', {params})
      .subscribe(result => {
        const searchResult = new SearchResult();
        searchResult.mapFromDto(result);
        /*
                this.filters.filter_items = this.searchResult.filters;
        */
        console.log(searchResult.filters);
        this.showSpinner = false;
      });
  }

  public searchYear() {
    const vehicleYear = this.vehicleYear;
    this.http.get(`https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&year=${vehicleYear}&site=truckworld&pagesize=15&sort=msrp_desc`)
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
        const searchResult = new SearchResult();
        searchResult.mapFromDto(result);
        this.showSpinner = false;
      });
  }

  /// methods
  public productClick(vin: string) {
    this.router.navigate([`product/${vin}`]).then();
  }

  public addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }
}

