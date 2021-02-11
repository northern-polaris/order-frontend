import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerListComponent} from './seller-list/seller-list.component';

const routes: Routes = [
  {
    path: 'seller/list', component: SellerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {
}
