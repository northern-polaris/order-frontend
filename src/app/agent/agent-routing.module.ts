import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './_components/customer/customer-list/customer-list.component';
import {SellerListComponent} from './_components/seller/seller-list/seller-list.component';
import {SellerFormComponent} from './_components/seller/seller-form/seller-form.component';

const routes: Routes = [
  {path: 'seller/list', component: SellerListComponent},
  {path: 'seller/form', component: SellerFormComponent},
  {path: 'seller/form/:id', component: SellerFormComponent},
  {path: 'customer/list', component: CustomerListComponent},

  // {path: 'customer/form', component: CustomerFormComponent},
  // {path: 'customer/form/:id', component: CustomerFormComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {
}

