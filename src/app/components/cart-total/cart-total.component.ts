import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartElement } from 'src/app/models/cart-element';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.sass']
})
export class CartTotalComponent implements OnInit {
  grandTotal = this.computeTotal();

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  computeTotal() {
    let total = 0;

    this.cartService.cartElements.forEach(book => {
        total += this.applyDiscount(book) * book.units;
      }
    );

    return total.toFixed(2);
  }

  applyDiscount(book: CartElement) {
    // Round original price to two decimal places
    const price           = +book.details.price.toFixed(2);
    const percentage      = (book.units >= 10) ? 10 : 5;
    const discountedPrice = price - (price * (percentage / 100));

    // Round discounted price to two decimal places
    return Number(discountedPrice.toFixed(2));
  }
}
