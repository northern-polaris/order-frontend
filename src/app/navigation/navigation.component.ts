import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'order-frontend';
  productListPath = 'product/list';
  sellerListPath = 'agent/seller/list';
  customerListPath = 'agent/customer/list';
  orderListPath = 'order/list';

  constructor() { }

  ngOnInit(): void {
  }

}
