import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderFormComponent} from './order-form/order-form.component';

const routes: Routes = [
  {path: 'list', component: OrderListComponent},

  {path: 'form', component: OrderFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
