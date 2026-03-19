import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    @if (blog) {
      <div class="blog">
        <div class="blog-detail-title">{{ blog.title }}</div>
        <div class="blog-detail">{{ blog.detail }}</div>
      </div>
    } @else {
      <div class="blog">
        <p>Select a blog to view details</p>
      </div>
    }
  `,
  styles: [
    `
      .blog {
        padding: 10px;
      }
      .blog-detail-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .blog-detail {
        font-size: 1em;
      }
    `,
  ],
})
export class BlogComponent {
  @Input() blog?: Blog;
}
