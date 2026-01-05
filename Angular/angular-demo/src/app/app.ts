import { Component, signal } from '@angular/core';
import { binding, footer, header, hello } from './hello/hello';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [hello, header, footer, binding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-demo');
}
