import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer';


@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    /// angular modules
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  entryComponents: []
})
export class ThemeModule {

}
