import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    // canActivate: [authGuard],
    // data: { roles: ['ROLE_BUYER'] },
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent,
    // canActivate: [authGuard],
    // data: { roles: ['ROLE_BUYER'] },
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    // canActivate: [authGuard],
    // data: { roles: ['ROLE_BUYER'] },
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
