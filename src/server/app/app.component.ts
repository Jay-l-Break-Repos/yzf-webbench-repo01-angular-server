import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { MainComponent } from './main/main.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <app-main></app-main>
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
