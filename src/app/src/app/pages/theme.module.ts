import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports: [
    /// angular modules
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  entryComponents: []
})
export class ThemeModule {

}
