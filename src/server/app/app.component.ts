import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { BlogComponent } from './blog/blog.component'
import { BlogListComponent } from './blog-list/blog-list.component'
import { Blog, BlogService } from './blog.service'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <div class="content">
      <app-blog-list [blogs]="blogs" (selectBlog)="onSelectBlog($event)"></app-blog-list>
      <app-blog [blog]="selectedBlog"></app-blog>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .content {
      display: flex;
      flex-direction: row;
    }
  `,
})
export class AppComponent {
  title = 'angular'
  blogs: Blog[] = []
  selectedBlog?: Blog

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.blogs
  }

  onSelectBlog(blog: Blog): void {
    this.selectedBlog = blog
  }
}
