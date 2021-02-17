import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-list/product-item/product-item.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ProductFormComponent} from './product-form/product-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductFormComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        ProductRoutingModule,
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
export class ProductModule {
}
