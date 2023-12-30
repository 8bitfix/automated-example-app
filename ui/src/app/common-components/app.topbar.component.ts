import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];

    @Input() isAuthenticated = false;

    @Output() buttonEvent: EventEmitter<string> = new EventEmitter();

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, public router: Router) { }

    handleButtonClick(event: string) {
      this.buttonEvent.emit(event);
    }

    ngOnInit() {
      this.items = [
        {
            label: 'User Info',
            icon: 'pi pi-fw pi-info-circle text-2xl',
            styleClass: "p-button-rounded p-button-text p-button-plain"
        },
        {
            label: 'Order History',
            icon: 'pi pi-fw pi-history text-2xl',
            styleClass: "p-button-rounded p-button-text p-button-plain"
        },
        {
          label: 'Saved Items',
          icon: 'pi pi-fw pi-save text-2xl',
          styleClass: "p-button-rounded p-button-text p-button-plain"
      }
    ];
  }
}
