import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Practical NGRX
      </h1>
      <app-users-page></app-users-page>
      <app-book-page></app-book-page>
    </div>
  `
})
export class AppComponent {
}
