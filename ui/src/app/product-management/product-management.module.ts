import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { NewProductComponent } from './new-product/new-product.component';
import { AttributesComponent } from './attributes/attributes.component';
import { StockComponent } from './stock/stock.component';
import { ManagementSideMenuComponent } from './management-side-menu/management-side-menu.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    NewProductComponent,
    AttributesComponent,
    StockComponent,
    ManagementSideMenuComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    CalendarModule,
    CheckboxModule,
    InputNumberModule,
    InputTextModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    AccordionModule
  ],
  exports: [
    ManagementSideMenuComponent
  ]
})
export class ProductManagementModule { }
