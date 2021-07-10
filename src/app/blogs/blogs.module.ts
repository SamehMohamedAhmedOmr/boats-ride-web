import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { IndexComponent } from './index/index.component';
import {BlogsComponent} from './blogs.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';


@NgModule({
  declarations: [IndexComponent,BlogsComponent,BlogDetailsComponent],
    imports: [
        CommonModule,
        BlogsRoutingModule,
        NgxSkeletonLoaderModule
    ]
})
export class BlogsModule { }
