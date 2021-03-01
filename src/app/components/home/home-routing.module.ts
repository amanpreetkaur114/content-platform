import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent,
    children:[
      
      {
        path:'template',
        loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
      },
      {
        path:'account',
        loadChildren: () => import('./account/account.module').then(m=> m.AccountModule)
      }
  
    
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
