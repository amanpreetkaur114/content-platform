import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/auth/login/login.component';

const routes: Routes = [
  {
    path:'auth',
    children:[
      {
        path:'',
        loadChildren: () => import('./components/auth/auth/auth.module').then(m => m.AuthModule)
        
      },
    ],

  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  // {
  //   path:'',
  //   children:[
  //     {
  //       path:'template',
  //       loadChildren: () => import('./components/home/templates/templates.module').then(m => m.TemplatesModule)
    
  //     },
  //   ],
  // },
  {
    path:'home',
    children:[
      {
        path:'',
    loadChildren:()=> import('./components/home/home.module').then(m=>m.HomeModule)
  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
