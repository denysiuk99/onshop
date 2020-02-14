import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer';
import {FilterPipe} from '../pipes/filter.pipe';


@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    FilterPipe
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
