import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToggleWish } from 'src/app/store/wishes/wishes.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  constructor(private cartService: CartService, private store: Store<any>) {}
  ngOnInit(): void {}

  addToCard(e) {
    e.preventDefault();
    e.stopPropagation();
    this.cartService.addIntoCart(this.product);
  }

  addToWishList(e) {
    e.preventDefault();
    e.stopPropagation();
    this.store.dispatch(new ToggleWish(this.product));
  }
}
