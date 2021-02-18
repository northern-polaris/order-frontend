import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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


  displayedColumns: string[] = ['id', 'name', 'default_price', 'description', 'product_category', 'update', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected productService: ProductService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProductList();

  }

  getProductList(): void {
    this.productService.getProductList(this.paginator ? this.paginator.pageIndex : 0).subscribe(
      response => {
        this.productList = response['results'];
        this.count = response['count'];
        this.dataSource = response['results'];
        console.log(response);
      });

  }

  navigate(): void {
    this.router.navigate(['product/form']).then();

  }

  update(id): void {
    // this.router.navigate(['product/form'], id).then();
    this.router.navigate(['product/form', id]).then();
  }


  delete(id): void {
    this.productService.deleteProduct(id).subscribe(response => {

      this.snackBar.open('Perditesimi u krye me sukses', 'close', {
        duration: 5000,
        panelClass: ['on-delete-snackbar'],
      });
      // on_success deletion, we update table with updated data from backend
      this.ngOnInit();

    });
  }

}
