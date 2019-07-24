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

}
