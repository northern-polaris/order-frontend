import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './_components/product/product-list/product-list.component';
import {ProductFormComponent} from './_components/product/product-form/product-form.component';


let routes: Routes;
routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'form', component: ProductFormComponent},
  {path: 'form/:id', component: ProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
