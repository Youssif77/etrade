import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product;

  cartCount;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCartCount.subscribe(
      (val) => (this.cartCount = val.length)
    );
  }

  addToCard(e) {
    e.preventDefault();
    e.stopPropagation();
    this.cartService.addIntoCart(this.product);
  }
}
