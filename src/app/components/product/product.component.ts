import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() {}

  ngOnInit(): void {}

  onBuy(): void {
    console.log('the product was purchased');
  }
}
