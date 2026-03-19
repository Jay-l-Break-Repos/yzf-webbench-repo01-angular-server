import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Blog } from '../blog.model'

@Component({
  selector: 'app-blog-list',
  imports: [],
  template: `
    <div class="blog-list">
      @for (blog of blogs; track blog.title) {
        <div
          class="list-item"
          [class.selected]="blog.title === selectedTitle"
          (click)="onSelect(blog)"
        >
          {{ blog.title }}
        </div>
      }
    </div>
  `,
  styles: `
    .blog-list {
      display: flex;
      flex-direction: column;
    }
    .list-item {
      width: 300px;
      height: 40px;
      box-sizing: border-box;
      padding: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
    .list-item:hover {
      background-color: #f0f0f0;
    }
    .list-item.selected {
      background-color: #e0e0e0;
      font-weight: bold;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = []
  @Input() selectedTitle = ''
  @Output() blogSelected = new EventEmitter<Blog>()

  onSelect(blog: Blog): void {
    this.blogSelected.emit(blog)
  }
}
