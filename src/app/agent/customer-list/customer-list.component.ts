import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../customer.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getCustomerList();

  }

  getCustomerList(): void {
    this.customerService.getCustomerList(this.paginator ? this.paginator.pageIndex : 0).subscribe(
      response => {
        this.customerList = response['result'];
        this.count = response['count'];
        this.dataSource = response['results'];
      }
    );

  }

  navigate(): void {
    this.router.navigate(['agent/customer/form']).then();

  }

  update(id): void {
    this.router.navigate(['agent/customer/form', id]).then();
  }

  delete(id): void {
    this.customerService.deleteCustomer(id).subscribe(response => {

      this.snackBar.open('Perditesimi u krye me sukses', 'close', {
        duration: 5000,
        panelClass: ['on-delete-snackbar'],
      });
      // on_success deletion, we update table with updated data from backend
      this.ngOnInit();

    });
  }

}
