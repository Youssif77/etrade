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
  totalPrice: number;

  constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.cartService.currentCartCount.subscribe((val) => {
  //     let tempArr = [];
  //     this.cartItems = val.reduce((result, item) => {
  //       (result[item.id] || (result[item.id] = [])).push(item);
  //       return result;
  //     }, {});
  //     console.log(this.cartItems);
  //     for (let item in this.cartItems) {
  //       tempArr.push({
  //         ...this.cartItems[item][0],
  //         quntity: this.cartItems[item].length,
  //       });
  //       this.totalPrice += this.cartItems[item][0].price;
  //     }
  //     this.totalPrice = Math.ceil(this.totalPrice);
  //     this.cartItems = tempArr;
  //   });
  // }

  ngOnInit(): void {
    this.cartService.currentCartCount.subscribe((items) => {
      const aggregatedItems = [];
      const aggregatedItemsId = [];
      // this.totalPrice = 0;
      items.forEach((item) => {
        if (aggregatedItemsId.includes(item.id)) {
          aggregatedItems[item.id - 1].quntity += 1;
        } else {
          aggregatedItemsId.push(item.id);
          aggregatedItems.push({ quntity: 1, ...item });
        }
        // this.totalPrice += item.price;
      });
      this.cartItems = aggregatedItems;
      // this.totalPrice = Math.ceil(this.totalPrice);
    });
  }

  increaseItem(item: object) {
    this.cartService.addIntoCart(item);
  }

  decreaseItem(itemId: number) {
    this.cartService.removeOneFromCart(itemId);
  }
  RemoveItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }
}
