import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../../core/services/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  slug: any;
  blog: any;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private blogservice: BlogsService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getBlog();
  }

  getBlog() {
    this.blogservice.getBlog(this.slug).subscribe(data => {
      this.blog = data;
      this.cdr.markForCheck();
    })
  }
}
