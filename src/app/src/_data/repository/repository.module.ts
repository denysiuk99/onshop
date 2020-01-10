import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ShopRepository} from './shop.repository';

@NgModule({
  declarations: [],
  imports: [
    /// angular modules
    CommonModule,
    HttpClientModule,

    /// app modules
  ],
  providers: [
    ShopRepository

  ]
})
export class RepositoryModule {
}
