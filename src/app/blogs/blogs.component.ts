import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../core/services/blogs.service';
import {Blogs} from '../../Models/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public blogs : Blogs [] = [];
  constructor(private blogsService:BlogsService) { }

  ngOnInit(): void {
    this.getBlogs();
  }
getBlogs(){
    this.blogsService.getBlogs().subscribe(data =>{
      this.blogs =data;
      console.log(this.blogs);
    })
}
}
