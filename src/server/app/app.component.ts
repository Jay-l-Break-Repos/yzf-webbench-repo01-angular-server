import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { MainComponent } from './main/main.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <app-main></app-main>
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 100vh;
    }

    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `,
})
export class AppComponent {
  title = 'angular'
}
