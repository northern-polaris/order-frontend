import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../_services/order.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {OrderFormComponent} from '../order-form/order-form.component';
import {DeleteConfirmationComponent} from '../../../../shared/delete-confirmation/delete-confirmation.component';
import {Order, OrderUnit} from '../../_model/order';
import {Customer} from '../../../agent/_models/customer';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderUnit: OrderUnit[];
  count;
  displayedColumns: string[] = ['code', 'code_year', 'date_registered', 'customer_id', 'creator_id', 'update', 'delete'];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog
  ) {
    this.orderUnit = [];
  }

  ngOnInit(): void {
    this.getOrderList();

  }

  getOrderList(): void {
    this.orderService.list({page: this.paginator ? this.paginator.pageIndex + 1 : 1}).subscribe(
      response => {
        this.orderUnit = response.results;
        this.count = response.count;
        this.dataSource = new MatTableDataSource<Order>(response.results);
      });
  }

  addOrder(): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '1000px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getOrderList();

    });

  }


  update(id): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '1000px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getOrderList();

    });
  }

  delete(id): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.orderService.delete(id).subscribe(response => {
          this.getOrderList();
        });
      }
    });
  }


}
