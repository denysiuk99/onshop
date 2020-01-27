import {CartItemEntity, Product} from '../../_core';

export class AppMapper {
  public static toCartItem(entity: Product): CartItemEntity {
    const result = new CartItemEntity();
    result.id = entity.productId;
    result.imageUrl = entity.imageUrl;
    result.title = entity.title;
    result.price = entity.price;
    result.description = entity.description;
    return result;
  }
}
