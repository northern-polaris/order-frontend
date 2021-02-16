import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../customer.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: [];
  pageSize = 10;
  count;

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'company_name'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomerList(this.paginator ? this.paginator.pageIndex : 0).subscribe(
      response => {
        this.customerList = response['result'];
        this.count = response['count'];
        this.dataSource = response['results'];
        console.log('Done');
      }
    );
  }

}
