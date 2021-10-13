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
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCartCount.subscribe((val) => {
      let tempArr = [];
      this.cartItems = val.reduce((result, item) => {
        (result[item.id] || (result[item.id] = [])).push(item);
        return result;
      }, {});
      for (let item in this.cartItems) {
        tempArr.push({
          ...this.cartItems[item][0],
          quntity: this.cartItems[item].length,
        });
      }
      this.cartItems = tempArr;
    });
    console.log(this.cartItems);
  }

  increaseItem(item) {
    this.cartService.addIntoCart(item);
  }

  decreaseItem(itemId) {
    this.cartService.removeFromCart(itemId);
  }
}
