import {NgModule} from '@angular/core';
import {HomePageComponent} from './home';
import {CommonModule} from '@angular/common';
import {AppPagesRouting} from './app-pages.routing';
import {AppPagesComponent} from './app-pages.component';
import {CategoriesPageComponent} from './categories';
import {InventoryPageComponent} from './inventory';
import {ContactUsPageComponent} from './contact-us';
import {TrackOrderPageComponent} from './track-order';
import {MyAccountPageComponent} from './my-account';
import {ThemeModule} from './theme.module';
import {ProductDetailsPageComponent} from './product-details';
import {CartPageComponent} from './cart';
import {RepositoryModule} from '../../_data';
import {CartModule} from '../../_core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckoutPageComponent} from './checkout';
import {OrderNumberPageComponent} from './order-number';
import {MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule, MatProgressSpinnerModule, MatSliderModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


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
    CartPageComponent,
    CheckoutPageComponent,
    OrderNumberPageComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,


    /// app modules
    ThemeModule,
    RepositoryModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,

    /// core
    CartModule,

    /// data
    RepositoryModule,

    /// routing
    AppPagesRouting

  ],
  exports: [],
  providers: []
})
export class AppPagesModule {
}
