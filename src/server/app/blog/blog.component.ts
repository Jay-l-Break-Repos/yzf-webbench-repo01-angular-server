import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <div class="blog">
      <div class="blog-title">{{ title }}</div>
      <div class="blog-detail">{{ detail }}</div>
    </div>
  `,
  styles: `
    .blog {
      padding: 10px 20px;
    }
    .blog-title {
      width: fit-content;
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .blog-detail {
      font-size: 1em;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}
