import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList: any = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .all()
      .subscribe((products) => (this.productsList = products));
  }
}
