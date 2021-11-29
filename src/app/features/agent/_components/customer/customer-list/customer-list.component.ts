import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../../_services/customer.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {CustomerFormComponent} from '../customer-form/customer-form.component';
import {DeleteConfirmationComponent} from '../../../../../shared/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: [];
  pageSize = 10;
  count;

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'company_name', 'update', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected customerService: CustomerService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getCustomerList();

  }

  getCustomerList(): void {
    this.customerService.list({page: this.paginator ? this.paginator.pageIndex + 1 : 1}).subscribe(
      response => {
        this.customerList = response['result'];
        this.count = response['count'];
        this.dataSource = response['results'];
      }
    );

  }


  addCustomer(): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      width: '1000px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getCustomerList();

    });

  }

  update(id): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      width: '1000px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getCustomerList();

    });
  }

  delete(id): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.customerService.delete(id).subscribe(response => {
          this.getCustomerList();
        });
      }
    });
  }


}
