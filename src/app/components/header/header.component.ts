import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  booksCount() {
    if (this.cartService.cartElements.length > 0) {
     return this.cartService.cartElements.map(el => el.units).reduce((acc, el) => acc + el);  
    } 
    return 0;
  }

      
}
