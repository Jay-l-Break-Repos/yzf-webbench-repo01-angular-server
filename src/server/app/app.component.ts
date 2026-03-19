import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Blog } from './model/blog';
import { BLOGS } from './model/mock-blogs';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-blog-list
        [blogs]="blogs"
        [selectedBlogId]="selectedBlog?.id"
        (blogSelected)="onBlogSelected($event)"
      ></app-blog-list>
      <app-blog [blog]="selectedBlog"></app-blog>
    </main>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'angular';
  blogs: Blog[] = BLOGS;
  selectedBlog: Blog | undefined = this.blogs[0];

  onBlogSelected(blog: Blog): void {
    this.selectedBlog = blog;
  }
}
