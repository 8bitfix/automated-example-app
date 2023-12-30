import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    // canActivate: [authGuard],
    // data: { roles: ['ROLE_BUYER'] },
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
