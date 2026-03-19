import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Blog } from '../blog'

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-list">
      <div class="list-item" *ngFor="let blog of blogs">
        {{ blog.title }}
      </div>
    </div>
  `,
  styles: `
    .blog-list {
      width: 200px;
      float: left;
    }
    .list-item {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      cursor: pointer;
      box-sizing: border-box;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = []
}
