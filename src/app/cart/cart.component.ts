import { Component } from '@angular/core';
import { CartService } from '../cart-servis/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class OrdersComponent {
  cart: any[] = [];
  totalPrice!:any
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }
}
