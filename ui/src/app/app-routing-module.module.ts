
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page';

const flowFeedback = () => import('./flow-feedback').then(m => m.FlowFeedbackModule);
const productList = () => import('./product-list').then(m => m.ProductListModule);
const orderManagement = () => import('./order-management').then(m => m.OrderManagementModule);
const productManagement = () => import('./product-management').then(m => m.ProductManagementModule);
const productOverview = () => import('./product').then(m => m.ProductModule);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'flow-control',
    loadChildren: flowFeedback
  },
  {
    path: 'catalogue',
    loadChildren: productList
  },
  {
    path: 'order-management',
    loadChildren: orderManagement
  },
  {
    path: 'product-management',
    loadChildren: productManagement
  },
  {
    path: 'product-overview',
    loadChildren: productOverview
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
