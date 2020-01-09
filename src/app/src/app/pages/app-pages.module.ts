import {NgModule} from '@angular/core';
import {HomePageComponent} from './home';
import {CommonModule} from '@angular/common';
import {AppPagesRouting} from './app-pages.routing';
import {AppPagesComponent} from './app-pages.component';
import {CategoriesPageComponent} from './categories';
import {InventoryPageComponent} from './inventory/inventory-page.component';
import {ContactUsPageComponent} from './contact-us/contact-us-page.component';
import {TrackOrderPageComponent} from './track-order/track-order-page.component';
import {MyAccountPageComponent} from './my-account/my-account-page.component';
import {ThemeModule} from './theme.module';
import {ProductDetailsPageComponent} from './product-details';
import {CartPageComponent} from './cart';

@NgModule({
  declarations: [
    AppPagesComponent,
    HomePageComponent,
    CategoriesPageComponent,
    InventoryPageComponent,
    ContactUsPageComponent,
    MyAccountPageComponent,
    TrackOrderPageComponent,
    ProductDetailsPageComponent,
    CartPageComponent

  ],
  imports: [
    CommonModule,

    /// app modules
    ThemeModule,

    /// routing
    AppPagesRouting
  ],
  exports: [],
  providers: []
})
export class AppPagesModule {
}
