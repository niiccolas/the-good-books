import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  @Input() userQueryResults: any;

  constructor() { }

  ngOnInit() {
  }

}
