import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GbooksApiService } from 'src/app/services/gbooks-api.service';
import { CartService } from 'src/app/services/cart.service';
import { CartElement } from 'src/app/models/cart-element';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  public id:string = '';
  public book: any = null;

  constructor(private route: ActivatedRoute, private gbooksApiService: GbooksApiService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id;
      // récupérer la requête
      this.gbooksApiService.selectBookItem(params.id).subscribe(
        (data: any) => {
          this.book = data;
        },
        (error) => {
          console.log(error);
          this.router.navigate(['404']);
        }
      );
    });
  }

  addToCart() {
    this.cartService.cartElements.push(new CartElement(this.book));
    console.log(this.cartService.cartElements);
  }
}
