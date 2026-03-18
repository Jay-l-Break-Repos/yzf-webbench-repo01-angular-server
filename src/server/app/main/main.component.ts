import { Component } from '@angular/core'
import { BlogComponent } from '../blog/blog.component'

@Component({
  selector: 'app-main',
  imports: [BlogComponent],
  template: `
    <div class="main-content">
      <app-blog [title]="blogTitle" [detail]="blogDetail"></app-blog>
    </div>
  `,
  styles: `
    .main-content {
      flex: 1;
      padding: 16px;
    }
  `,
})
export class MainComponent {
  blogTitle = 'Morning'
  blogDetail = 'Morning My Friends'
}
