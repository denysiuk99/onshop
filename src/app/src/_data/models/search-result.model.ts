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
  public vin: string;
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
    this.vin = dto.vin;
    this.title = dto.title;
    this.make = dto.make;
    this.model = dto.model;
    this.year = dto.year;
    this.price = dto.price;
    this.externalImages = dto.externalImages;
  }
}
