import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TabViewModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    DropdownModule
  ]
})
export class ProductModule { }
