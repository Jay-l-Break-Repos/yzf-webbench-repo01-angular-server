import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface BlogEntry {
  title: string
  detail: string
}

@Component({
  selector: 'app-blog-list',
  imports: [],
  template: `
    <div class="blog-list">
      @for (blog of blogs; track blog.title) {
        <div class="list-item" (click)="selectBlog(blog)">
          {{ blog.title }}
        </div>
      }
    </div>
  `,
  styles: `
    .blog-list {
      padding: 8px 0;
    }
    .list-item {
      width: 300px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      cursor: pointer;
      box-sizing: border-box;
    }
    .list-item:hover {
      background-color: #f0f0f0;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: BlogEntry[] = []
  @Output() blogSelected = new EventEmitter<BlogEntry>()

  selectBlog(blog: BlogEntry): void {
    this.blogSelected.emit(blog)
  }
}
