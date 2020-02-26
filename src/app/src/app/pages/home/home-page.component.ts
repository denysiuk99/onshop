import {Component, OnInit} from '@angular/core';
import {Categories, Product} from '../../../_core/entities';
import {ShopRepository} from '../../../_data/repository';
import {mocks} from '../../../_data/repository/mock';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SearchResult, Vehicle} from '../../../_data/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public products: Array<Vehicle> = [];
  public categories: Array<Categories> = [];
  public searchResult: SearchResult;

  /// predicate
  public didLoaded = false;

  constructor(private router: Router, private shopRepository: ShopRepository, private http: HttpClient) {
    this.searchResult = new SearchResult();
    this.products = new Array<Vehicle>();
    this.categories = mocks.categories;
  }


  ngOnInit() {
    this.http.get('https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld&pagesize=15&sort=msrp_desc')
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
      });
  }

}
