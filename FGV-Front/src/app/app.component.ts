import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface BooksElement {
  id: number;
  title: string;
  author: string;
  edition: string;
}

class Book implements BooksElement {
  id: number;
  title: string;
  author: string;
  edition: string;
}

var booksData: BooksElement[] = [
  {id: 1, title: 'L1', author: "A", edition: 'X'},
  {id: 2, title: 'L2', author: "A", edition: 'Y'},
  {id: 3, title: 'L3', author: "B", edition: 'X'},
  {id: 4, title: 'L4', author: "V", edition: 'Y'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient){}
  
  displayedColumns: string[] = ['id', 'title', 'author', 'edition'];
  dataSource = new MatTableDataSource(booksData);
  historico = [];
  title = 'FGV-220';
  
  @ViewChild(MatSort) sort: MatSort;

  books = booksData;
  multipleSort: string[] = ['id ASC'];
  newBook = new Book()

  sortString() {
    return this.multipleSort.join(", ")
  }
  sortInfo(info) {
    return this.multipleSort.some(v=> v.indexOf(info) >= 0);
  }
  removeBook(id) {
    this.books = this.books.filter(e => e.id !== id )
  }
  newBookString() {
    return JSON.stringify(this.newBook)
  }
  booksString() {
    return JSON.stringify(this.books)
  }
  addNewBook() {
    this.books.push(this.newBook);
    this.newBook = new Book();
  }
  addHistorico(msg, obj) {
    this.historico.push({data:new Date(), msg:msg, obj:obj})
  }
  historicoString() {
    return JSON.stringify(this.historico)
  }

  // recupera livros ordenados baseado e massa de dados enviada
  getSortBooks(books, sort){
    var _me = this
    this.historico  = []
    this.addHistorico("call /api/ordenacao", { livros: books, ordenacao: sort })
    // realiza chamada post passando livros e ordenação em json no corpo  
    this.httpClient.post<BooksElement[]>(`/api/ordenacao`, { livros: books, ordenacao: sort }).subscribe((res)=>{
      this.addHistorico("return /api/ordenacao", res)
      _me.books = res;
      console.log(res);
    });
  }

  orderer(column, event) {
      // recupera elemento de sort
      let el = event.target.parentElement;

      // remove ordenação prévia da coluna
      this.multipleSort = this.multipleSort.filter(e => e.indexOf(column) === -1 )
      
      // adiciona ordenação ascendente OU descendente para a coluna
      if(el.classList.contains('asc')) this.multipleSort.push(`${column} ASC`)
      else if(el.classList.contains('desc')) this.multipleSort.push(`${column} DESC`)

      // após ordenação, consuma o serviço de ordenação de livros
      this.getSortBooks(this.booksString(), this.sortString())
      
  };
  
  ngOnInit() {
    this.dataSource.sort = this.sort;

    // após inicio, consuma o serviço de ordenação de livros
    this.getSortBooks("inicial", "id ASC")
  }
}


