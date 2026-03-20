import { Component } from '@angular/core'
import { BlogListComponent } from './blog-list/blog-list.component'
import { HeaderComponent } from './header/header.component'
import { BlogComponent } from './blog/blog.component'
import { Blog } from './blog'
import { BLOGS } from './mock-blogs'

@Component({
  selector: 'app-root',
  imports: [BlogListComponent, HeaderComponent, BlogComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-blog-list
        [blogs]="blogs"
        [selectedBlog]="selectedBlog"
        (blogSelected)="onBlogSelected($event)"
      ></app-blog-list>
      <app-blog [title]="selectedBlog.title" [detail]="selectedBlog.detail"></app-blog>
    </main>
  `,
  styles: `
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
