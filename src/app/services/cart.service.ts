import {
  Injectable
} from '@angular/core';
import {
  CartElement
} from '../models/cart-element';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartElements: Array < CartElement > = [{
    details: {
      "title": "For Whom the Bell Tolls",
      "author": [
        "Ernest Hemingway"
      ],
      "price": 11.62,
      "currencyCode": "EUR",
      "thumbnail": "http://books.google.com/books/content?id=TdVQAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72htjypRCacw0rmKqycoQr8w3R8yCFAWaLJxi6ttcK1MJb1bwMH13xJraa-Dg2KV_3vOto0sb7LyM5OU95HPlLxK8YyD1IBYDVY-_yMPTjxK-i971g3JLzOjOCJ_6fjtP6PZGRn&source=gbs_api",
      id: "TdVQAQAAQBAJ"
    },
    units: 1
  }];

  constructor() {}

  cartEmpty() {
    return this.cartElements.length === 0;
  }
}
