import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

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
      total += this.applyDiscount(book.price, 5);
    });

    return total;
  }

  applyDiscount(price: number, percentage: number) {
    // Round original price to two decimal places
    price = +price.toFixed(2);

    const discountedPrice = price - (price * (percentage / 100));

    // Round discounted price to two decimal places
    return +discountedPrice.toFixed(2);
  }
}
