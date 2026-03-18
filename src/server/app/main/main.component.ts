import { Component } from '@angular/core'
import { BlogComponent } from '../blog/blog.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BlogComponent],
  template: `
    <div class="main-content">
      <app-blog [title]="blog.title" [detail]="blog.detail"></app-blog>
    </div>
  `,
  styles: `
    .main-content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
})
export class MainComponent {
  blog = { title: 'Morning', detail: 'Morning My Friends' }
}
