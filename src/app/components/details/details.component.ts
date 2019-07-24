import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import {
  GbooksApiService
} from 'src/app/services/gbooks-api.service';
import {
  CartService
} from 'src/app/services/cart.service';
import {
  CartElement
} from 'src/app/models/cart-element';
import {
  cleanSession
} from 'selenium-webdriver/safari';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  public id = '';
  public book: any = null;

  constructor(private route: ActivatedRoute,
              private gbooksApiService: GbooksApiService,
              private cartService: CartService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      // récupérer la requête
      this.gbooksApiService.selectBookItem(params.id).subscribe(
        (data: any) => {
          this.book = data;

        },
        (error) => {
          this.router.navigate(['404']);
        }
      );
    });
  }

  addToCart() {
    const cartArray = this.cartService.cartElements;

    if (this.isInCart(this.book.id)) {
      for (const bookObject of cartArray) {
        if (bookObject.details.id === this.book.id) {
          bookObject.units++;
        }
      }
    } else {
      cartArray.push(new CartElement(this.book));
    }
  }

  isInCart(bookId) {
    return this.cartService.cartElements.some(cart => cart.details.id === bookId);
  }
}
