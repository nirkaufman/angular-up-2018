import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../reducers/user.reducer';

@Component({
  selector: 'app-users-page',
  template: `
    <p>
      users-page works!
      {{ user | async }}
    </p>
  `,
  styles: []
})
export class UsersPageComponent implements OnInit {

  user = this.store.select(s => s.email);

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
  }

}
