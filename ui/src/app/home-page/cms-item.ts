import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export abstract class CmsItem {

  data: any | undefined;

  constructor(public httpClient: HttpClient, public router: Router) {
  }

  public getData(url: string) {
    this.httpClient.get(`${url}`).subscribe((result: any) => {
      this.data = result.data;
    })
  }

  buttonClicked() {
    if (this.data) {
      this.router.navigateByUrl(this.data.attributes.buttonLink);
    }
  }
}
