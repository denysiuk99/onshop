import {NgModule} from '@angular/core';
import {HomePageComponent} from './home';
import {CommonModule} from '@angular/common';
import {AppPagesRouting} from './app-pages.routing';
import {AppPagesComponent} from './app-pages.component';
import {CategoriesPageComponent} from './categories';

@NgModule({
  declarations: [
    AppPagesComponent,
    HomePageComponent,
    CategoriesPageComponent

  ],
  imports: [
    CommonModule,

    /// routing
    AppPagesRouting
  ]
})
export class AppPagesModule {
}
