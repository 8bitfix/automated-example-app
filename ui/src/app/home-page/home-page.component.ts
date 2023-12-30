import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialCollectionComponent } from './special-collection/special-collection.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: any;
  baseCmsUrl: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.baseCmsUrl = environment.cmsUrl;
  }

  ngOnInit() {
    this.getHomePageLayout();
  }

  private getHomePageLayout() {
    this.httpClient.get(`${this.baseCmsUrl}/api/cmsitems`).subscribe((result: any) => {
      this.data = result.data.sort((a: any, b: any) => a.attributes.order - b.attributes.order)
    })
  }

  public sendTo(location: string) {
    this.router.navigate([location]);
  }
}
