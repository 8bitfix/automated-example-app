import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth';
import { NewProductComponent } from './new-product/new-product.component';
import { AttributesComponent } from './attributes/attributes.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: NewProductComponent,
    // canActivate: [authGuard],
    // data: { roles: ['ROLE_BUYER'] },
  },
  {
    path: 'attributes',
    component: AttributesComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
