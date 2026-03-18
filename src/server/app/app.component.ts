import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `
    <app-header />
    <main class="main"></main>
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
