import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { SellerListComponent } from './seller-list/seller-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [SellerListComponent, CustomerListComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AgentModule { }
