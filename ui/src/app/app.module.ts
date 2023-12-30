import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigModule } from './auth';
import { ProductListModule } from './product-list';
import { OrderManagementModule } from './order-management';
import { HomePageModule } from './home-page';
import { ProductManagementModule } from './product-management';
import { CommonComponentsModule } from './common-components/common-components.module';
import { FlowFeedbackModule } from './flow-feedback/flow-feedback.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthConfigModule,
    ProductListModule,
    HomePageModule,
    ProductManagementModule,
    CommonComponentsModule,
    OrderManagementModule,
    FlowFeedbackModule,
    ButtonModule,
    RippleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
