import { Injectable } from '@angular/core';
import { CartElement } from '../models/cart-element';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartElements: Array<CartElement> = [];


  constructor() { }
}
