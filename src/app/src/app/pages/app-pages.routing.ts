import {RouterModule, Routes} from '@angular/router';
import {AppPagesComponent} from './app-pages.component';
import {HomePageComponent} from './home';
import {ModuleWithProviders} from '@angular/core';
import {CategoriesPageComponent} from './categories';

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
      }
    ]
  }
];
export const AppPagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
