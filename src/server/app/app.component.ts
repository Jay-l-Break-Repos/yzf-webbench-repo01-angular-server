import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from './services/blog.service';
import { Blog } from './models/blog.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BlogListComponent, BlogComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <div class="content">
        <app-blog-list
          [blogs]="blogs"
          (blogSelected)="onBlogSelected($event)"
        ></app-blog-list>
        <app-blog [blog]="selectedBlog"></app-blog>
      </div>
    </main>
  `,
  styles: [
    `
      body {
        margin: 0;
        padding: 0;
      }
      .main {
        padding: 0;
      }
      .content {
        display: flex;
        flex-direction: row;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular';
  blogs: Blog[] = [];
  selectedBlog?: Blog;

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }

  onBlogSelected(blog: Blog): void {
    this.selectedBlog = blog;
  }
}
