import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  private headTitle = 'Boats Ride - Yacht Rental Dubai Marina | Yacht Charter Dubai | Boats Rental Dubai Marina | www.boatsride.com';
  private description = 'Yacht Rental Dubai Marina | Yacht Charter Dubai | Boats Rental Dubai Marina';
  private image = 'https://boatsride.com/logo.png';
  private keywords = 'Yacht Rental Dubai Marina, Yacht Charter Dubai, Boats Rental Dubai Marina';

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) { }

  updateTags(title = null, description = null, image = null, url = null) {
    if (!title) {
      this.updateTitle(this.headTitle);
    } else {
      // @ts-ignore
      this.updateTitle(title + '| Boats-Ride');
    }

    if (!description) {
      this.updateDescription(this.description);
    } else {
      // @ts-ignore
      this.updateDescription(description);
    }

    if (!image) {
      this.updateImage(this.image);
    } else {
      // @ts-ignore
      this.updateImage(image);
    }
  }

  private updateTitle(title:string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ property: 'og:title', content: title ? title : this.headTitle });
    this.metaService.updateTag({ property: 'twitter:title', content: title ? title : this.headTitle });
  }

  private updateDescription(description:string) {
    this.metaService.updateTag({ property: 'og:description', content: description ? description : this.description });
    this.metaService.updateTag({ property: 'twitter:description', content: description ? description : this.description });
  }

  private updateImage(image:string) {
    this.metaService.updateTag({ property: 'og:image', content: image ? image : this.image });
    this.metaService.updateTag({ property: 'twitter:image', content: image ? image : this.image });
  }

  private updateUrl(url:string) {
    this.metaService.updateTag({ name: 'url', property: 'og:url', content: url });
    this.metaService.updateTag({ name: 'url', property: 'twitter:url', content: url });
  }

  updateKeyWords(keywords = null) {
    // @ts-ignore
    this.metaService.updateTag({ name: 'keywords', content: (keywords ? keywords : this.keywords) });
  }
}
