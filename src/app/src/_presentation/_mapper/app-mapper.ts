import {CartItemModel} from '../../_core';
import {Vehicle} from '../../_data/models';

export class AppMapper {
  public static toCartItem(entity: Vehicle): CartItemModel {
    const result = new CartItemModel();
    result.id = entity.id;
    result.title = entity.title;
    result.make = entity.make;
    result.model = entity.model;
    result.year = entity.year;
    result.price = entity.price;
    result.vin = entity.vin;
    result.externalImages = entity.externalImages;
    return result;
  }
}
