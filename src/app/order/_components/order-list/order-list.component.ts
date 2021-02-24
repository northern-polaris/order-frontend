import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../_services/order.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderUnit: any[];


  pageSize = 10;
  count;


  displayedColumns: string[] = ['code', 'code_year', 'date_registered', 'customer_id', 'creator_id', 'update', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.orderUnit = [1, 2, 3, 4];
  }

  ngOnInit(): void {
    this.getOrderList();

  }

  getOrderList(): void {
    this.orderService.getOrder(this.paginator ? this.paginator.pageIndex : 0).subscribe(
      response => {
        this.orderUnit = response['results'];
        this.count = response['count'];
        this.dataSource = response['results'];
      });

  }


  navigate(): void {
    this.router.navigate(['order/form']).then();

  }

  update(id): void {
    // this.router.navigate(['product/form'], id).then();
    this.router.navigate(['order/form', id]).then();
  }


  delete(id): void {
    this.orderService.deleteOrder(id).subscribe(response => {

      this.snackBar.open('Perditesimi u krye me sukses', 'close', {
        duration: 5000,
        panelClass: ['on-delete-snackbar'],
      });
      // on_success deletion, we update table with updated data from backend
      this.ngOnInit();

    });
  }

}
