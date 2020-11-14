import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // path: 'tabs',  // tabsをトップページにしないならこうする
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1/:pass',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2/:pass',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3/:pass',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1/default',
        pathMatch: 'full'
      },
      {
        path: 'tab1',
        redirectTo: '/tabs/tab1/default',
        pathMatch: 'full'
      },
      {
        path: 'tab2',
        redirectTo: '/tabs/tab2/default',
        pathMatch: 'full'
      },
      {
        path: 'tab3',
        redirectTo: '/tabs/tab3/default',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1/default',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
