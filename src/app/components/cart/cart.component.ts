import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartList = this.cartService.cartElements;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.cartList);
  }

  addBook(id) {
    this.cartList[this.whereInCart(id)].units++;
    console.log(this.cartList);
  }

  substractBook(id) {
    if (this.cartList[this.whereInCart(id)].units > 1) {
      this.cartList[this.whereInCart(id)].units--;
    }
  }

  discardBook(id) {
    this.cartList.splice(this.whereInCart(id), 1);
  }

  whereInCart(bookId) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (Object.values(this.cartList[i].details).includes(bookId)) {
        return i;
      }
    }
  }
}
