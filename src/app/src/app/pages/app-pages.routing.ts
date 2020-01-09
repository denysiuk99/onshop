import {RouterModule, Routes} from '@angular/router';
import {AppPagesComponent} from './app-pages.component';
import {HomePageComponent} from './home';
import {ModuleWithProviders} from '@angular/core';
import {CategoriesPageComponent} from './categories';
import {InventoryPageComponent} from './inventory';
import {ContactUsPageComponent} from './contact-us/contact-us-page.component';
import {TrackOrderPageComponent} from './track-order/track-order-page.component';
import {MyAccountPageComponent} from './my-account/my-account-page.component';
import {ProductDetailsPageComponent} from './product-details';
import {CartPageComponent} from './cart';

export const routes: Routes = [
  {
    path: '',
    component: AppPagesComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'categories',
        component: CategoriesPageComponent
      },
      {
        path: 'inventory',
        component: InventoryPageComponent
      },
      {
        path: 'contact-us',
        component: ContactUsPageComponent
      },
      {
        path: 'track-order',
        component: TrackOrderPageComponent
      },
      {
        path: 'my-account',
        component: MyAccountPageComponent
      },
      {
        path: 'inventory/product',
        component: ProductDetailsPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      }
    ]
  }
];
export const AppPagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
