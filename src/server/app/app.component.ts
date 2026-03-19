import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { BlogComponent } from './blog/blog.component'
import { BlogListComponent } from './blog-list/blog-list.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-blog-list></app-blog-list>
      <app-blog></app-blog>
    </main>
  `,
  styles: `
    body {
      margin: 0;
      padding: 0;
    }
  `,
})
export class AppComponent {
  title = 'angular'
}
