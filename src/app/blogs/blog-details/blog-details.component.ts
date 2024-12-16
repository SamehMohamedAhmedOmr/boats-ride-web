import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../../core/services/blogs.service';
import {Blogs} from "../../../Models/blogs";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailsComponent implements OnInit {
  slug: any;
  blog!: Blogs;
  sanitizedContent: SafeHtml | null = null;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private metaService: MetaTagService,
              private sanitizer: DomSanitizer,
              private blogservice: BlogsService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getBlog();
  }

  getBlog() {
    this.blogservice.getBlog(this.slug).subscribe(data => {
      this.blog = data;
      this.updateMetaTags();
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.blog?.description.replace('<oembed url', '<iframe class="embed-responsive-item" src').replace('</oembed>', '</iframe>'));
      this.cdr.markForCheck();
    })
  }

  private updateMetaTags() {
    window.dataLayer = [];
    // @ts-ignore
    this.metaService.updateTags(this.blog?.seo?.title, this.blog?.seo?.description, this.blog?.image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.blog.title ? this.blog.title : '',
            id: this.blog.id ? this.blog.id : '',
          }]
        }
      }
    });
  }

}
