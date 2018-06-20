import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './book/book.reducer';
import { BookPageComponent } from './book-page/book-page.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('books', [reducer])
  ],
  declarations: [BookPageComponent],
  exports: [BookPageComponent]
})
export class BooksModule { }
