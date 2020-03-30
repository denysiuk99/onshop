import {Component, Injectable} from '@angular/core';
import {InventoryPageComponent} from '../inventory';
import {Categories, Product} from '../../../_core/entities';
import {ActivatedRoute} from '@angular/router';
import {ShopRepository} from '../../../_data/repository';
import {mocks} from '../../../_data/repository/mock';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})


export class CategoriesPageComponent {
  /// constants
  public categories: Array<Categories> = [];

  /// constructor
  constructor(private route: ActivatedRoute, private test: ShopRepository) {
  this.categories = mocks.categories;
  }
}






















