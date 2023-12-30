import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppSidebarComponent } from "./app.sidebar.component";
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SideMenuButtonComponent } from './side-menu-button.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        SideMenuButtonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        DropdownModule,
        StyleClassModule,
        DialogModule,
        CheckboxModule,
        ButtonModule,
        ChipModule,
        MenuModule,
        ToggleButtonModule,
        MultiSelectModule,
        SlideMenuModule
    ],
    exports: [
      AppMenuitemComponent,
      AppTopBarComponent,
      AppFooterComponent,
      AppMenuComponent,
      AppSidebarComponent,
      SideMenuButtonComponent
    ]
})
export class CommonComponentsModule { }
