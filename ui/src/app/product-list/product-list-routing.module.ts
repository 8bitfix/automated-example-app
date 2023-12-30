import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { authGuard } from '../auth';



const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
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
export class ProductListRoutingModule { }
