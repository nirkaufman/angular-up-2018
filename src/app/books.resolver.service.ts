import {select, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {take} from 'rxjs/operators';
import {AddBook} from './books/book/book.actions';

@Injectable()
export class BookResolver implements Resolve {
  constructor(private store: Store) {}

  resolve(): Observable<any> {
    this.initBooks();
    return this.waitForBooksToLoad();
  }

  // dispatch an action to populate the books
  initBooks(): void {
    this.store.subscribe( state => {
      if (state.books[0].ids.length === 0) {
        this.store.dispatch(new AddBook({ book: {id: '123', title: 'pre fetched book', description: 'my book'} }));
      }
    });
  }

  // return a value when ready
  waitForBooksToLoad() {
    return this.store.pipe(
      select( state => state.books[0].entities),
      take(1)
    );
  }
}
