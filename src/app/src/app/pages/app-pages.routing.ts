import {RouterModule, Routes} from '@angular/router';
import {AppPagesComponent} from './app-pages.component';
import {HomePageComponent} from './home';
import {ModuleWithProviders} from '@angular/core';
import {CategoriesPageComponent} from './categories';
import {InventoryPageComponent} from './inventory';
import {ContactUsPageComponent} from './contact-us';
import {TrackOrderPageComponent} from './track-order';
import {MyAccountPageComponent} from './my-account';
import {ProductDetailsPageComponent} from './product-details';
import {CartPageComponent} from './cart';
import {CheckoutPageComponent} from './checkout';

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
        path: 'inventory/:categoryId',
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
        path: 'product/:productId',
        component: ProductDetailsPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'checkout',
        component: CheckoutPageComponent
      }
    ]
  }
];
export const AppPagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
