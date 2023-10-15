import { Component } from '@angular/core';
import { books } from '../assets/data/books.json'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LocalStorageService } from './service/localStorage/local-storage.service';


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

  constructor(
    private snackBar: MatSnackBar,
    private localStorage: LocalStorageService
    ){

  }

  ngOnInit(){
    this.lengthBooks();
    this.getLectures();
    console.log('Libros: ',this.books)    
  }

  addLecture(book: any) {
      console.log(book);
      if(this.lectures.includes(book)){
        console.log('Libro YA agregado.');
      } else {
        this.lectures.push(book);
        this.localStorage.setItem('lectures', this.lectures);
      }
  }

  getLectures(){
    const lectures = this.localStorage.getItem('lectures');
    this.lectures = lectures;
    console.log('lectures localStorage: ', lectures);
    console.log('this.lectures == localStorage.lectures: ', this.lectures);
    
  }

  deleteLecture(book:any){
    this.lectures.splice(book, 1);
    console.log(this.lectures);
    const lectures = this.localStorage.getItem('lectures');
    const libroEliminar = book;
    const index = lectures.indexOf(libroEliminar);
    lectures.splice(index, 1);
    this.localStorage.setItem('lectures', lectures);
    console.log('Libro Eliminado con exito.');
    
  }

  lengthBooks(){
    const books = this.books;

    this.length = books.length;
  }
}
