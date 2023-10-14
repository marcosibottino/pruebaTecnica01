import { Component } from '@angular/core';
import { books } from '../assets/data/books.json'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica01';

  public books: any = books.library;

  public lectures:any = [];

  public length: any;

  book: any;

  constructor(private snackBar: MatSnackBar){}

  ngOnInit(){
    this.lengthBooks();

    console.log('Libros: ',this.books)
  }

  addLecture(book: any) {
      console.log(book);
      if(this.lectures.includes(book)){
        console.log('Libro YA agregado.');
      } else {
        this.lectures.push(book);
        console.log('Lecture', this.lectures);
      }
  }

  deleteLecture(book:any){
    this.lectures.splice(book, 1);
    console.log(this.lectures);
    
  }

  lengthBooks(){
    const books = this.books;

    this.length = books.length;
  }
}
