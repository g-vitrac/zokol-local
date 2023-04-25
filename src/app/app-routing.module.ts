import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProxiesManagersComponent} from "./proxies-managers/proxies-managers.component";
import {ProxyManagerComponent} from "./proxy-manager/proxy-manager.component";

const routes: Routes = [
  {
    path: '',
    component: ProxiesManagersComponent
  },
  {
    path: 'proxy/:id',
    component: ProxyManagerComponent
  },
  {
    path: 'keys',
    component: ProxiesManagersComponent
  },
  {
    path: 'users',
    component: ProxiesManagersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
