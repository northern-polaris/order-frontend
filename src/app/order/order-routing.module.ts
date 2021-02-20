import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OderFormComponent} from './oder-form/oder-form.component';

const routes: Routes = [
  {path: 'list', component: OrderListComponent},

  {path: 'form', component: OderFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
