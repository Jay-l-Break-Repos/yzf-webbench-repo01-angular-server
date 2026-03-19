import { Component } from '@angular/core'
import { BlogListComponent } from './blog-list/blog-list.component'
import { Blog } from './blog'
import { BLOGS } from './mock-blogs'

@Component({
  selector: 'app-root',
  imports: [BlogListComponent],
  template: `
    <main class="main">
      <app-blog-list [blogs]="blogs"></app-blog-list>
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
}
