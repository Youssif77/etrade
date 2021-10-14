import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { aggregateItems } from 'src/app/helper';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartContainer = new BehaviorSubject([]);
  currentCartCount = this.cartContainer.asObservable();

  constructor() {}

  addIntoCart(newCartitem: object): void {
    const newCart = aggregateItems(this.cartContainer.getValue(), newCartitem);
    this.cartContainer.next(newCart);
  }

  removeOneFromCart(id: number) {
    const itemId = this.cartContainer
      .getValue()
      .findIndex((item) => item.id === id);
    const newCart = [...this.cartContainer.getValue()];
    if (newCart[itemId].quntity > 1) newCart[itemId].quntity -= 1;
    else return this.removeFromCart(id);
    this.cartContainer.next(newCart);
  }

  removeFromCart(id: number): void {
    const newCart = this.cartContainer
      .getValue()
      .filter((item) => item.id !== id);
    this.cartContainer.next(newCart);
  }
}
