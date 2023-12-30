import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-side-menu-button',
  templateUrl: './side-menu-button.component.html'
})
export class SideMenuButtonComponent {

  @ViewChild('trigger') trigger!: ElementRef;

  constructor(public layoutService: LayoutService) {}
}
