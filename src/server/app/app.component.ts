import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { BlogComponent } from './blog/blog.component'
import { BlogListComponent } from './blog-list/blog-list.component'
import { Blog } from './blog.model'
import { BLOGS } from './mock-blogs.data'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-blog-list
        [blogs]="blogs"
        [selectedTitle]="selectedBlog.title"
        (blogSelected)="onBlogSelected($event)"
      ></app-blog-list>
      <app-blog
        [title]="selectedBlog.title"
        [detail]="selectedBlog.detail"
      ></app-blog>
    </main>
  `,
  styles: `
    body {
      margin: 0;
      padding: 0;
    }
    .main {
      display: flex;
      flex-direction: row;
    }
  `,
})
export class AppComponent {
  title = 'angular'
  blogs: Blog[] = BLOGS
  selectedBlog: Blog = BLOGS[0]

  onBlogSelected(blog: Blog): void {
    this.selectedBlog = blog
  }
}
