import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog-list',
  imports: [],
  template: `
    <ul>
      @for (blog of blogs; track blog.id) {
        <li (click)="selectBlog(blog)" [class.selected]="blog.id === selectedBlogId">
          {{ blog.title }}
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = [];
  @Input() selectedBlogId?: number;
  @Output() blogSelected = new EventEmitter<Blog>();

  selectBlog(blog: Blog): void {
    this.blogSelected.emit(blog);
  }
}
