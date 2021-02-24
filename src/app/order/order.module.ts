import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderListComponent} from './_components/order-list/order-list.component';
import {OrderFormComponent} from './_components/order/order-form/order-form.component';
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
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [OrderListComponent, OrderFormComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,


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
    MatCardModule,
  ]
})
export class OrderModule {
}
