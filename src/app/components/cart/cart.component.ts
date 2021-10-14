import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems;
  displayedColumns = ['image', 'title', 'price', 'quntity'];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCartCount.subscribe((items) => {
      this.cartItems = items;
    });
  }

  increaseItem(item: object) {
    console.log(item);
    this.cartService.addIntoCart(item);
  }

  decreaseItem(itemId: number) {
    this.cartService.removeOneFromCart(itemId);
  }
  RemoveItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }
}
