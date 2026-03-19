import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      padding: 10px 20px;
    }
  `,
})
export class HeaderComponent {}
