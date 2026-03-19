import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { BlogComponent } from './blog/blog.component'
import { BlogListComponent, BlogEntry } from './blog-list/blog-list.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-blog-list [blogs]="blogs" (blogSelected)="onBlogSelected($event)"></app-blog-list>
      <app-blog [title]="selectedBlog.title" [detail]="selectedBlog.detail"></app-blog>
    </main>
  `,
  styles: `
    body {
      margin: 0;
      padding: 0;
    }
    .main {
      display: flex;
    }
  `,
})
export class AppComponent {
  title = 'angular'

  blogs: BlogEntry[] = [
    { title: 'Morning', detail: 'Morning My Friends' },
    { title: 'Travel', detail: 'I love traveling!' },
  ]

  selectedBlog: BlogEntry = this.blogs[0]

  onBlogSelected(blog: BlogEntry): void {
    this.selectedBlog = blog
  }
}
