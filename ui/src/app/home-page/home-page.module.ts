import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { PromoComponent } from './promo/promo.component';
import { PopularComponent } from './popular/popular.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DividerModule } from 'primeng/divider';
import { StoryComponent } from './story/story.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SpecialCollectionComponent } from './special-collection/special-collection.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CmsRequestInterceptor } from './cms-request.interceptor';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    HomePageComponent,
    PromoComponent,
    PopularComponent,
    CountdownComponent,
    StoryComponent,
    SubscribeComponent,
    SpecialCollectionComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TooltipModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    CarouselModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CmsRequestInterceptor, multi: true }
  ]
})
export class HomePageModule { }
