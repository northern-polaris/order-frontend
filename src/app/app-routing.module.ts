import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {AuthGuard} from './core/auth/guards/auth.guard';


const routes: Routes = [

  {path: 'login', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)},

  // {path: '', redirectTo: 'product/list', pathMatch: 'full'},

  {
    path: '', component: NavigationComponent, children: [
      {path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)},
      {path: 'order', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule)},
      {path: 'agent', loadChildren: () => import('./features/agent/agent.module').then(m => m.AgentModule)},
    ],
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: 'product/list', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
