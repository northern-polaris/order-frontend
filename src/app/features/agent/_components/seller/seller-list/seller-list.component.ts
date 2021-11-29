import {Component, OnInit, ViewChild} from '@angular/core';
import {SellerService} from '../../../_services/seller.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeleteConfirmationComponent} from '../../../../../shared/delete-confirmation/delete-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {CustomerFormComponent} from '../../customer/customer-form/customer-form.component';
import {SellerFormComponent} from '../seller-form/seller-form.component';
import {ProductFormComponent} from '../../../../product/_components/product/product-form/product-form.component';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
  sellerList: any[] = [];
  pageSize = 10;
  count;
  isChecked = true;

  displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'update', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(protected sellerService: SellerService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getSellerList();

  }

  getSellerList(): void {
    this.sellerService.list({page: this.paginator ? this.paginator.pageIndex + 1 : 1}).subscribe(
      response => {
        this.sellerList = response.results;
        this.count = response.count;
        this.dataSource = response.results;
      });

  }

  isActiveChange(row): void {
    const id = row.id;
    const is_active = row.is_active;
    this.sellerService.isActiveSeller({id, is_active}).subscribe(response => {
      this.snackBar.open(response.message, 'close');
    });

  }


  addSeller(): void {
    const dialogRef = this.dialog.open(SellerFormComponent, {
      width: '1000px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getSellerList();

    });

  }

  updateSeller(id): void {
    const dialogRef = this.dialog.open(SellerFormComponent, {
      width: '1000px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getSellerList();
    });
  }


  deleteDialog(id): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.sellerService.delete(id).subscribe(response => {
          this.getSellerList();
        });
      }
    });
  }


}

