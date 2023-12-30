import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { LegalInformationComponent } from './legal-information/legal-information.component';



@NgModule({
  declarations: [
    AboutComponent,
    DataPrivacyComponent,
    TermsOfServiceComponent,
    LegalInformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoPagesModule { }
