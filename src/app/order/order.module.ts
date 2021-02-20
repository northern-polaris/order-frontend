import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OderFormComponent} from './oder-form/oder-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [OrderListComponent, OderFormComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FlexLayoutModule,


    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ]
})
export class OrderModule {
}
