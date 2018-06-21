import {Routes} from '@angular/router';
import {UsersPageComponent} from './user/users-page/users-page.component';
import {BookPageComponent} from './books/book-page/book-page.component';

export const routes: Routes = [
  {path: 'user', component: UsersPageComponent},
  {path: 'books', component: BookPageComponent}
];
