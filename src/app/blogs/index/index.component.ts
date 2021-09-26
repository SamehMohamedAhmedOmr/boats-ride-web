import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Blogs} from '../../../Models/blogs';
import {BlogsService} from '../../../core/services/blogs.service';
import {SeoService} from "../../../core/services/seo.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public blogs: Blogs [] = [];
  is_loading:boolean = true;

  constructor(private blogsService: BlogsService,
              private seoService:SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.getBlogs();
  }

  getBlogs() {
    this.blogsService.getBlogs().subscribe(data => {
      this.blogs = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  getSeo(){
    this.seoService.Seo('blogs').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }
}
