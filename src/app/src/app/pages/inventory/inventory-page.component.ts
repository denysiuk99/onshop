import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryNew, FilterItemNew, FilterNew, SearchResult, ShopRepository, Vehicle} from '../../../_data';
import {Categories, Product} from '../../../_core/entities';
import {CartService} from '../../../_core';
import {AppMapper} from '../../_mapper';
import {HttpClient, HttpParams} from '@angular/common/http';
import {InventoryFilter} from './models';

@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent implements OnInit {
  /// fields
  public products: Array<Product> = [];
  public inventoryFilter: InventoryFilter;


  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository, private router: Router, private cartService: CartService, private http: HttpClient) {
    this.inventoryFilter = new InventoryFilter(http);

    this.route.params.subscribe((data) => {
      this.products = this.test.getProducts(Number(data.categoryId));
    });
  }


  ngOnInit() {
    this.http.get(this.inventoryFilter.filterQuery)
      .subscribe(result => {
        this.inventoryFilter.searchResult.mapFromDto(result);
        this.inventoryFilter.showSpinner = false;
      });
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

