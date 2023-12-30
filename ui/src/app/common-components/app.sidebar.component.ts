import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, TemplateRef } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
  @Input() template: TemplateRef<any> | undefined;

  constructor(public el: ElementRef) {
  }

  @HostListener('window:resize')
  isVisible(){
    if (this.el){
      const rect = this.el.nativeElement.getBoundingClientRect();
      const visible = rect.right >= 0;
    }
  }

}

