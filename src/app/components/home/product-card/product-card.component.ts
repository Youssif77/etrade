import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productImage: string = '';
  @Input() productTitle: string = '';
  @Input() productCategory: string = '';
  @Input() productPrice: number = 0;
  @Input() productId: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
