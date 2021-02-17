import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {SellerListComponent} from './seller-list/seller-list.component';
import {SellerFormComponent} from './seller-form/seller-form.component';

const routes: Routes = [
  {path: 'seller/list', component: SellerListComponent},
  {path: 'seller/form', component: SellerFormComponent},
  {path: 'customer/list', component: CustomerListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {
}

