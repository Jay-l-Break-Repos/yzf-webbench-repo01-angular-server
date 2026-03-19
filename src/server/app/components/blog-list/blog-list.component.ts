import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  template: `
    <div class="blog-list">
      @for (blog of blogs; track blog.id) {
        <div class="blog-list-item" (click)="selectBlog(blog)">
          <div class="blog-title">{{ blog.title }}</div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .blog-list {
        padding: 10px;
      }
      .blog-list-item {
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
      }
      .blog-list-item:hover {
        background-color: #f0f0f0;
      }
      .blog-title {
        font-weight: bold;
      }
    `,
  ],
})
export class BlogListComponent {
  @Input() blogs: Blog[] = [];
  @Output() blogSelected = new EventEmitter<Blog>();

  selectBlog(blog: Blog): void {
    this.blogSelected.emit(blog);
  }
}
