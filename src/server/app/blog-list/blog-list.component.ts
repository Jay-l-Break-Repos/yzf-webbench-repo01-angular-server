import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Blog } from '../blog'

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-list">
      <div
        class="list-item"
        [class.selected]="blog === selectedBlog"
        *ngFor="let blog of blogs"
        (click)="onSelect(blog)"
      >
        {{ blog.title }}
      </div>
    </div>
  `,
  styles: `
    .blog-list {
      width: 300px;
      float: left;
    }
    .list-item {
      width: 300px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      cursor: pointer;
      box-sizing: border-box;
    }
    .list-item.selected {
      background-color: #d0e8ff;
      font-weight: bold;
    }
    .list-item:hover {
      background-color: #e8e8e8;
    }
    .list-item.selected:hover {
      background-color: #d0e8ff;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = []
  @Input() selectedBlog: Blog | null = null
  @Output() blogSelected = new EventEmitter<Blog>()

  onSelect(blog: Blog): void {
    this.blogSelected.emit(blog)
  }
}
