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
    console.log(this.cartContainer.getValue());
  }

  removeFromCart(id) {
    const newCart = this.cartContainer
      .getValue()
      .filter((item) => item.id !== id);
    this.cartContainer.next(newCart);
  }
}
