import {Routes} from '@angular/router';
import {UsersPageComponent} from './user/users-page/users-page.component';
import {BookPageComponent} from './books/book-page/book-page.component';
import {BookResolver} from './books.resolver.service';


export const routes: Routes = [
  {path: 'user', component: UsersPageComponent},
  {path: 'books', component: BookPageComponent, resolve: {books: BookResolver}}
];
