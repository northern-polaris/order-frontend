import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  isAdministrator: boolean;

  constructor(private router: Router) {
    this.isAdministrator = this.isLoggedIn();

  }

  isLoggedIn(): boolean {
    const groups: string = localStorage.getItem('groups');
    const userGroups: string[] = groups.split(',');
    return userGroups.includes('Administrator');
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['login']).then();

  }

  ngOnInit(): void {
  }

}
