import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      
  
      {
        path:'account',
        loadChildren: () => import('./account/account.module').then(m=> m.AccountModule)
      },
      {
        path:'publication-settings',
        loadChildren: () => import('./publication-settings/publication-settings.module').then(m=>m.PublicationSettingsModule),
        // children:[
        //   {
        //     path:'template',
        //     loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
        //   },
        // ]
      }
  
    
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
