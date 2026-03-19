import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: [
    `
      .header {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
      }
      h1 {
        margin: 0;
      }
    `,
  ],
})
export class HeaderComponent {}
