export class SearchResult {
  public page: number;
  public pageSize: number;
  public items: Array<Vehicle>;
  public filters: FilterNew;

  constructor() {
    this.items = new Array<Vehicle>();
    this.filters = new FilterNew();
  }

   mapFromDto(dto: any) {
    this.page = dto.page;
    this.pageSize = dto.page_size;
    this.items = [];
    for (const item of dto.items) {
      const entity = new Vehicle();
      entity.mapFromDto(item);
      this.items.push(entity);
    }
    this.filters.mapFromDto(dto.filters);
  }
}

export class FilterNew {
  public categories: Array<CategoryNew>;

  constructor() {
    this.categories = [];
  }

  public mapFromDto(dto: any) {
    this.categories = [];
    for (const item of dto.categories) {
      const entity = new CategoryNew();
      entity.mapFromDto(item);
      this.categories.push(entity);
    }
  }
}

export class CategoryNew {
  public categoryName: string;
  public filterItems: Array<FilterItemNew>;

  constructor() {
    this.filterItems = [];
  }

  public mapFromDto(dto: any) {
    this.categoryName = dto.categoryName;
    for (const item of dto.filter_items) {
      const entity = new FilterItemNew();
      entity.mapFromDto(item);
      this.filterItems.push(entity);
    }
  }
}

export class FilterItemNew {
  public name: string;
  public count: number;
  public  isChecked: boolean;

  public mapFromDto(dto: any) {
    this.name = dto.name;
    this.count = dto.count;
    this.isChecked = dto.is_checked;
  }
}

export class Vehicle {
  public id: number;
  public vin: string;
  public title: string;
  public make: string;
  public model: string;
  public year: string;
  public price: number;
  public externalImages: string;

  constructor() {
  }

  mapFromDto(dto: any) {
    this.id = dto.id;
    this.vin = dto.vin;
    this.title = dto.title;
    this.make = dto.make;
    this.model = dto.model;
    this.year = dto.year;
    this.price = dto.price;
    this.externalImages = dto.externalImages;
  }
}

