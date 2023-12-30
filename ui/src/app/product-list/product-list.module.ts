import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [CatalogueComponent, ProductFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductListRoutingModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    MenuModule,
    GalleriaModule,
    AccordionModule,
    InputNumberModule,
    SliderModule,
    BadgeModule,
    DividerModule,
    InputTextModule,
    CheckboxModule
  ],
  exports: [
    CatalogueComponent, ProductFilterComponent
  ]
})
export class ProductListModule { }
