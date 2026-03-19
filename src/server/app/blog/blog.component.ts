import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    <div class="blog">
      <div class="blog-title">{{ title }}</div>
      <div class="blog-detail">{{ detail }}</div>
    </div>
  `,
  styles: `
    .blog {
      padding: 16px;
    }
    .blog-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .blog-detail {
      font-size: 14px;
      line-height: 1.5;
    }
  `,
})
export class BlogComponent {
  @Input() title = ''
  @Input() detail = ''
}
