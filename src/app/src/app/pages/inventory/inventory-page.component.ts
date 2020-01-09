import {Component} from '@angular/core';

@Component({
  selector: 'app-inventory-page',
  styleUrls: ['./inventory-page.component.scss'],
  templateUrl: './inventory-page.component.html'
})

export class InventoryPageComponent {
  /// constants
  public inventory = [
    {
      title: 'Product_Name',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080',
      price: '22.44$'
    },
    {
      title: 'Product_Name',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080',
      price: '22.44$'
    },
    {
      title: 'Product_Name',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080',
      price: '22.44$'
    },
    {
      title: 'Product_Name',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080',
      price: '22.44$'
    }
  ];
}
