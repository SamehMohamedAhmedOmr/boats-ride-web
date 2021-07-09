import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {IndexComponent} from './index/index.component';
import {BlogsComponent} from './blogs.component';


const routes: Routes = [ {
  path: '',
  component: BlogsComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    } ,
    {
      path: ':slug',
      component: BlogDetailsComponent
    } ,
    {path: '**', redirectTo: '', pathMatch: ''},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
