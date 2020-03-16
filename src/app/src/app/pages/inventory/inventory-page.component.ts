import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryNew, FilterItemNew, FilterNew, SearchResult, ShopRepository, Vehicle} from '../../../_data';
import {Categories, Product} from '../../../_core/entities';
import {CartService} from '../../../_core';
import {AppMapper} from '../../_mapper';
import {HttpClient, HttpParams} from '@angular/common/http';
import {count} from 'rxjs/operators';


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
  public categories: CategoryNew;
  public filterItems: FilterItemNew;
  public filterQuery = 'https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld&pagesize=90';
  public queryBase = 'https://dealeractive-api-prod.azurewebsites.net/cars/search';

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private router: Router, private cartService: CartService, private http: HttpClient) {
    this.vehicle = new Vehicle();
    this.filters = new FilterNew();
    this.searchResult = new SearchResult();
    this.categories = new CategoryNew();
    this.filterItems = new FilterItemNew();

    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }


  ngOnInit() {
    this.http.get(this.filterQuery)
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
        this.showSpinner = false;
      });
  }


  public buildFilterQuery(query: string, filterName: string, filterValue: string, isChecked: boolean) {
    //  debugger;
    const a = query.split('?');
    query = a[1];
    if (isChecked) {
      query = this.extendFilterValue(query, filterName, filterValue);
    } else {
      query = this.removeFilterValue(query, filterName, filterValue);
    }
    query = this.queryBase + '?' + query;
    this.filterQuery = query;
    this.showSpinner = true;
    this.http.get(this.filterQuery)
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
        this.showSpinner = false;
      });
  }

  private extendFilterValue(query: string, filterName: string, filterValue: string) {
    const obj = this.parseQueryString(query);
    // debugger;
    // Check if filterName contains in object
    if (filterName in obj) {
      obj[filterName] += ',' + filterValue;
    } else {
      obj[filterName] = filterValue;
    }
    return this.encodeQueryString(obj);
  }

  private removeFilterValue(query: string, filterName: string, filterValue: string) {
    const obj = this.parseQueryString(query);
    // debugger;
    // Check if filterName contains in object
    if (filterName in obj) {
      if (obj[filterName].includes(',')) {
        const items = obj[filterName].split(',');

        const index = items.indexOf(filterValue);
        if (index > -1) {
          items.splice(index, 1);
        }
        obj[filterName] = items.join(',');
      } else {
        //  obj[filterName] = null;
        delete obj[filterName + ''];
      }
    } else {
      return query;
    }
    return this.encodeQueryString(obj);
  }

  private parseQueryString(queryString: string) {
    const query = {};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }

  private encodeQueryString(obj): string {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(p + '=' + obj[p]);
      }
    }
    return str.join('&');
  }


  /// methods
  public productClick(vin: string) {
    this.router.navigate([`product/${vin}`]).then();
  }

  public addToCart(item: Vehicle) {
    this.cartService.addItem(AppMapper.toCartItem(item));
  }

  public showHide(html: HTMLElement) {
    if (html.classList.contains('d-flex')) {
      html.classList.add('d-none');
      html.classList.remove('d-flex');
    } else {
      html.classList.add('d-flex');
      html.classList.remove('d-none');
    }
  }
}

