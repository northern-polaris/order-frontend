import {Component, OnInit, ViewChild} from '@angular/core';
import {SellerService} from '../seller.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
  sellerList: any[] = [];
  pageSize = 10;
  count;

  displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name', 'email'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(protected sellerService: SellerService) {

  }

  ngOnInit(): void {
    this.sellerService.getSellerList(this.paginator ? this.paginator.pageIndex : 0).subscribe(
      response => {
        this.sellerList = response['results'];
        this.count = response['count'];
        this.dataSource = response['results'];
        console.log('hemi ne faqen',);
      }
    );
  }

}
