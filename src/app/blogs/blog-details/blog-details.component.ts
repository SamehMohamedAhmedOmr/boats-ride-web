import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../../core/services/blogs.service';
import {Blogs} from "../../../Models/blogs";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  slug: any;
  blog!: Blogs;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private metaService: MetaTagService,
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
