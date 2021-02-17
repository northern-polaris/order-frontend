import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgentRoutingModule} from './agent-routing.module';
import {SellerListComponent} from './seller-list/seller-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {SellerFormComponent} from './seller-form/seller-form.component';


@NgModule({
  declarations: [SellerListComponent, CustomerListComponent, SellerFormComponent],
  imports: [
    AgentRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AgentModule {
}
