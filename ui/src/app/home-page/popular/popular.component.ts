import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CmsItem } from '../cms-item';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent extends CmsItem implements OnInit {

  @Input() url = '';

  ngOnInit(): void {
      this.getData(this.url);
  }

  public getImage(product: any) {
    if (product.attributes.img.data[0].attributes.url) {
      return `${environment.cmsUrl}${product.attributes.img.data[0].attributes.url}`;
    }
    return '';
  }

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  handleLinkClick(link: string) {
    this.router.navigateByUrl(link);
  }
}
