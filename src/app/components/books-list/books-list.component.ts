import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  // Inputs passed from parent component: Search
  @Input() userQueryResults: any;
  @Input() titleQuery: any;
  @Input() authorQuery: any;
  @Input() isbnQuery: any;

  constructor() { }

  ngOnInit() {
  }

}
