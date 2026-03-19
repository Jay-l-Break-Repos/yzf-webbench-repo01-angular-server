import { Component, Input } from '@angular/core'
import { Blog } from '../blog.service'

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    @if (blog) {
      <div class="blog-detail">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.detail }}</p>
      </div>
    }
  `,
  styles: `
    .blog-detail {
      padding: 16px;
    }
  `,
})
export class BlogComponent {
  @Input() blog?: Blog
}
