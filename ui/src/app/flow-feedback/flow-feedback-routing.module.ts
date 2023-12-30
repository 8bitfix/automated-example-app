import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";

const routes: Routes = [
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlowFeedbackRoutingModule { }
