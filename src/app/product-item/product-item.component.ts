import { Component, Input, OnInit } from '@angular/core';
import { Product } from "src/app/model/product";
import { MessangerService } from "src/app/service/messenger.service";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Product
  

  constructor(private msg: MessangerService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
    window.alert("your product has been added to cart")
  }

}
