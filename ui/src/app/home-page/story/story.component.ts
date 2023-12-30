import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CmsItem } from '../cms-item';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent extends CmsItem implements OnInit{

  @Input() url = '';

  ngOnInit(): void {
      this.getData(this.url);
  }

  public getImage() {
    if (this.data.attributes.img.data.attributes.formats.large) {
      this.httpClient.get(`${environment.cmsUrl}${this.data.img.data.attributes.formats.large.url}`)
    }
  }

  updateImageSource() : any {
    return environment.cmsUrl + this.data.attributes.img.data.attributes.url;
  }
}
