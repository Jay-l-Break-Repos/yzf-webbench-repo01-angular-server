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
      background-color: #4a90d9;
      color: #ffffff;
      padding: 16px 24px;
      margin: 0;
      width: 100%;
      box-sizing: border-box;
    }

    .header h1 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 600;
    }
  `,
})
export class HeaderComponent {}
