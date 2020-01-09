import {Component} from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent {
  /// constants
  public categories = [
    {
      title: 'category1',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080'
    },
    {
      title: 'category2',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080'
    },
    {
      title: 'category3',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080'
    },
    {
      title: 'category4',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080',
      product:{
        title: 'PRO',
        description: 'SOMETHING',
        imageUrl: 'https://source.unsplash.com/random/1920x1080'
      }
    },
    {
      title: 'category5',
      description: 'test-description',
      imageUrl: 'https://source.unsplash.com/random/1920x1080'
    }
  ];
}
