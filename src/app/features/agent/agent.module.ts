import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgentRoutingModule} from './agent-routing.module';
import {SellerListComponent} from './_components/seller/seller-list/seller-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CustomerListComponent} from './_components/customer/customer-list/customer-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {SellerFormComponent} from './_components/seller/seller-form/seller-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CustomerFormComponent} from './_components/customer/customer-form/customer-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@NgModule({
  declarations: [SellerListComponent, CustomerListComponent, SellerFormComponent, CustomerFormComponent],
  imports: [
    AgentRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule

  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ],

})
export class AgentModule {
}
