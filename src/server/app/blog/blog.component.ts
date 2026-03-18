import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <div class="blog">
      <div class="blog-title" [style.width]="'fit-content'" [style.fontSize]="'24px'">{{ title }}</div>
      <div class="blog-detail">{{ detail }}</div>
    </div>
  `,
  styles: `
    .blog {
      padding: 16px;
    }

    .blog-title {
      font-weight: 600;
      margin-bottom: 8px;
    }

    .blog-detail {
      color: #333;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}
