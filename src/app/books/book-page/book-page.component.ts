import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromBook from '../book/book.reducer';
import {Book} from '../book/book.model';
import {AddBook} from '../book/book.actions';

@Component({
  selector: 'app-book-page',
  template: `
    <p>
      book-page works!
    </p>

    <form (ngSubmit)="createBook()">
      <input type="text" placeholder="title" [(ngModel)]="book.title" name="title">
      <textarea name="description" [(ngModel)]="book.description"></textarea>
      <button>create</button>
    </form>
  `
})
export class BookPageComponent {

  book: Book = {id: '', description: '', title: ''};

  createBook() {
    this.book.id = new Date().getMilliseconds().toString();
    this.store.dispatch(new AddBook({book: this.book}));
  }

  constructor(private store: Store<fromBook.State>) {}
}
