import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    <div class="blog">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-detail">{{ detail }}</p>
    </div>
  `,
  styles: `
    .blog {
      padding: 16px;
    }

    .blog-title {
      font-size: 24px;
      width: fit-content;
      margin: 0 0 8px 0;
      font-weight: 600;
      color: #333333;
    }

    .blog-detail {
      font-size: 16px;
      color: #555555;
      margin: 0;
      line-height: 1.5;
    }
  `,
})
export class BlogComponent {
  @Input() title = ''
  @Input() detail = ''
}
