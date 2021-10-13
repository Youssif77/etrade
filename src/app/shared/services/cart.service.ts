import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartContainer = new BehaviorSubject([]);

  currentCartCount = this.cartContainer.asObservable();

  constructor() {}

  addIntoCart(newCartitem) {
    const newCart = [...this.cartContainer.getValue(), ...[newCartitem]];
    this.cartContainer.next(newCart);
  }

  removeFromCart(id) {
    const itemId = this.cartContainer
      .getValue()
      .findIndex((item) => item.id === id);
    const newCart = this.cartContainer.getValue().slice();
    newCart.splice(itemId, 1);
    this.cartContainer.next(newCart);
  }
}
