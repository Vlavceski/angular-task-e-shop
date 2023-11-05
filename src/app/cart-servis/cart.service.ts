import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  globalCart: any[] = [];

  addToCart(item: any) {
    this.globalCart.push(item);
  }

  getCart() {
    return this.globalCart;
  }
 
  clearCart() {
    this.globalCart = [];
  }
}