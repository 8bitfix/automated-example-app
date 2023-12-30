import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AccessDeniedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlowFeedbackModule { }
