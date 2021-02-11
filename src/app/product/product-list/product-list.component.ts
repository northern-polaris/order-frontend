import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categoryList: string[];
  productList: any[];

  constructor(protected productService: ProductService) {
    this.categoryList = ['adhsj', 'edhfud', 'tryh'];
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      response => {
        this.productList = response['results'];
        console.log(response);

      });
  }

}
