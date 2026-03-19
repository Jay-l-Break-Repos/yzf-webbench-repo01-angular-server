import { Component, Input } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    @if (blog) {
      <div>
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.detail }}</p>
      </div>
    }
  `,
  styles: ``,
})
export class BlogComponent {
  @Input() blog?: Blog;
}
