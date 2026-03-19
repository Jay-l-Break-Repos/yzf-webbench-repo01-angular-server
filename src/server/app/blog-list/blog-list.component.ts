import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Blog } from '../blog.service'

@Component({
  selector: 'app-blog-list',
  imports: [],
  template: `
    <div class="blog-list">
      <h3>Blog Entries</h3>
      <ul>
        @for (entry of blogs; track entry.title) {
          <li (click)="selectBlog.emit(entry)">{{ entry.title }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
    .blog-list {
      padding: 16px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 8px;
      cursor: pointer;
    }
    li:hover {
      background-color: #eee;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = []
  @Output() selectBlog = new EventEmitter<Blog>()
}
