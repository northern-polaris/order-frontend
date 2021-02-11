import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [

  {path: '', redirectTo: 'product/list', pathMatch: 'full'},

  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},

  {path: '**', redirectTo: 'product/list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
