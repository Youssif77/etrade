import { Component, OnInit } from '@angular/core';
import { CartService } from './../../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCartCount.subscribe(
      (val) => (this.cartCount = val.length)
    );
  }
}
