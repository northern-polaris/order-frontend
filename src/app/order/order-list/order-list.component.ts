import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderUnit: any[];

  constructor(private orderService: OrderService) {
    this.orderUnit = [1, 2, 3, 4];
  }

  ngOnInit(): void {
    this.orderService.getOrderUnit().subscribe(
      response => {
        this.orderUnit = response;


      });

  }

}
