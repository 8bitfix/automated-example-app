import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-side-menu',
  templateUrl: './management-side-menu.component.html',
  styleUrls: ['./management-side-menu.component.scss']
})
export class ManagementSideMenuComponent {
  constructor(public router: Router){}
}
