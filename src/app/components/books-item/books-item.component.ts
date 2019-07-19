import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.sass']
})
export class BooksItemComponent implements OnInit {

  @Input() book: any;

  constructor() { }

  ngOnInit() {
  }

}
