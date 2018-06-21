import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers/index';
import {Goto} from './navigation.actions';


@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Practical NGRX
      </h1>
      <span (click)="go('user')">user</span>
      <span (click)="go('books')">books</span>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  constructor(private store: Store<fromRoot.State>) {}

  go(url) {
    this.store.dispatch(new Goto(url));
  }
}
