import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #3f51b5;
      color: #ffffff;
      padding: 16px 24px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  `,
})
export class HeaderComponent {}
