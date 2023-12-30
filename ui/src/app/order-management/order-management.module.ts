import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './order-management-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { BasketComponent } from './basket/basket.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    CheckoutComponent,
    BasketComponent,
    OrderSummaryComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    CalendarModule,
    PasswordModule,
    DropdownModule,
    InputNumberModule,
    StyleClassModule,
    RippleModule,
    MessageModule,
    KeyFilterModule,
    FormsModule,
    DialogModule,
    RouterModule,
    SidebarModule,
    DialogModule
  ],
  exports: [BasketComponent, CheckoutComponent, OrderSummaryComponent, OrderHistoryComponent]
})
export class OrderManagementModule { }
