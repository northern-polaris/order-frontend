import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../_services/product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ProductFormComponent} from '../product-form/product-form.component';
import {DeleteConfirmationComponent} from '../../../../../shared/delete-confirmation/delete-confirmation.component';
import {Product} from '../../../models/product';
import {Customer} from '../../../../agent/_models/customer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categoryList: string[];
  productList: Product[];
  count;
  displayedColumns: string[] = ['id', 'name', 'default_price', 'description', 'product_category', 'update', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected productService: ProductService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getProductList();

  }

  getProductList(): void {
    this.productService.list({page: this.paginator ? this.paginator.pageIndex + 1 : 1}).subscribe(
      response => {
        this.productList = response.results;
        this.count = response.count;
        this.dataSource = new MatTableDataSource<Product>(this.productList);
      });

  }


  addProduct(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '1000px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getProductList();

    });

  }


  updateDialog(id): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '1000px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getProductList();
    });
  }


  delete(id): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.productService.delete(id).subscribe(response => {
          this.getProductList();
        });
      }
    });
  }


}
