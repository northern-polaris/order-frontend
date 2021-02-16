import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categoryList: string[];
  productList: any[];

  pageSize = 10;
  count;


  displayedColumns: string[] = ['id', 'name', 'default_price', 'description', 'product_category'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      response => {
        this.productList = response['results'];
        this.count = response['count'];
        this.dataSource = response['results'];
        console.log(response);
      });


  }
}
