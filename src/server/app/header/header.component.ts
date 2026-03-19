import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
      Hello Blog
    </header>
  `,
  styles: `
    header {
      background-color: #333;
      color: #fff;
      padding: 16px;
      font-size: 24px;
      font-weight: bold;
    }
  `,
})
export class HeaderComponent {}
