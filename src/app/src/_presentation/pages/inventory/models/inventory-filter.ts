import {HttpClient} from '@angular/common/http';
import {CategoryNew, FilterItemNew, FilterNew, SearchResult, Vehicle} from '../../../../_data/models';

export class InventoryFilter {
  public searchResult: SearchResult;
  public showSpinner = true;
  public vehicle: Vehicle;
  public filters: FilterNew;
  public filterQuery = 'https://dealeractive-api-prod.azurewebsites.net/cars/search/?kind=new&site=truckworld&pagesize=90';
  public queryBase = 'https://dealeractive-api-prod.azurewebsites.net/cars/search';
  public categories: CategoryNew;
  public filterItems: FilterItemNew;

  constructor(private http: HttpClient) {
    this.filterItems = new FilterItemNew();
    this.vehicle = new Vehicle();
    this.filters = new FilterNew();
    this.searchResult = new SearchResult();
    this.categories = new CategoryNew();
  }


  public buildFilterQuery(query: string, filterName: string, filterValue: string, isChecked: boolean) {
    // debugger;
    const a = query.split('?');
    query = a[1];
    if (isChecked) {
      query = this.extendFilterValue(query, filterName, filterValue);
    } else {
      query = this.removeFilterValue(query, filterName, filterValue);
    }
    query = this.queryBase + '?' + query;
    this.filterQuery = query;
    this.http.get(this.filterQuery)
      .subscribe(result => {
        this.searchResult.mapFromDto(result);
        this.showSpinner = false;
      });
  }

  private extendFilterValue(query: string, filterName: string, filterValue: string) {
    const obj = this.parseQueryString(query);
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

}
