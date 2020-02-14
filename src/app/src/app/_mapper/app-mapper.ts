import {CartItemEntity, Product} from '../../_core';
import {Vehicle} from '../pages/inventory';

export class AppMapper {
/*  public static toCartItem(entity: Product): CartItemEntity {
    const result = new CartItemEntity();
    result.id = entity.productId;
    result.imageUrl = entity.imageUrl;
    result.title = entity.title;
    result.price = entity.price;
    result.description = entity.description;
    return result;
  }*/
  public static toCartItem(entity: Vehicle): CartItemEntity {
    const result = new CartItemEntity();
    result.id = entity.id;
    result.title = entity.title;
    result.make = entity.make;
    result.model = entity.model;
    result.year = entity.year;
    result.price = entity.price;
    result.externalImages = entity.externalImages;
    return result;
  }
}
