import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './pipes/filter.pipe';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';


@NgModule({
  declarations: [
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
