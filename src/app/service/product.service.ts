import { Injectable } from '@angular/core';

import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products: Product[]=[
    new Product(1,'Redmi 9 prime','4GB RAM   Quard Prime camera  8mp front Camera  5020mAh Battery', 9999,"../../assets/mobile/m1.png"),

    new Product(2,'Redmi Note 9 pro','4GB RAM   Quard Prime camera  32mp front Camera  5020mAh Battery', 16999,"../../assets/mobile/m2.png"),

    new Product(3,'Redmi Note 9','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 13590,"../../assets/mobile/m3.png"),

    new Product(4,'RedmiNote 8pro','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 12799,"../../assets/mobile/m4.png"),

    new Product(5,'Samsung Galaxy e20 ','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 29000,"../../assets/mobile/s1.jpg"),

    new Product(6,'Samsung Galaxy M21','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 14999,"../../assets/mobile/s2.jpg"),

    new Product(7,'Samsung Galaxy M31','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 17799,"../../assets/mobile/s3.jpg"),

    new Product(8,'oppo F17 pro','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 18999,"../../assets/mobile/o1.jpg"),

    new Product(9,'Nokia 5.3 Android','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 12799,"../../assets/mobile/n1.jpg"),

    new Product(10,'Nokia 2.3 Android','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 12799,"../../assets/mobile/n2.jpg"),

    new Product(11,'Nokia 6.1 +','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 8499,"../../assets/mobile/n3.jpg"),

    new Product(12,'Nokia 6.2','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 13999,"../../assets/mobile/s1.jpg"),

    new Product(13,'APPLe iphone X3','4GB RAM   Quard Prime camera  18mp front Camera  5020mAh Battery', 28799,"../../assets/apple/1.jpg"),

    new Product(14,'OPPO s4','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 12799,"../../assets/oppo/4.png"),

    new Product(15,'Samsung 6 pro','4GB RAM   Quard Prime camera  13mp front Camera  2020mAh Battery', 8999,"../../assets/mobile/m2.png"),

    new Product(16,'lenovo pro6','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 12000,"../../assets/mi/L4.jpg"),

    new Product(17,'LENOVO e3','4GB RAM   Quard Prime camera  13mp front Camera  5020mAh Battery', 8000,"../../assets/mi/L2.jpg"),
  
    new Product(18,'LENOVO Note8','4GB RAM   Quard Prime camera  6mp front Camera  3020mAh Battery', 10999,"../../assets/mi/L1.jpg"),
  
  ]


  constructor() { }


  getProducts():Product[]{
    return this.Products
  }
}
