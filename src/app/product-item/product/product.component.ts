import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productList:Product[]= []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

}
