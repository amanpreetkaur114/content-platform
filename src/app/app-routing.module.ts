import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'auth',
        loadChildren: () => import('./components/auth/auth/auth.module').then(m => m.AuthModule)
    
      },
    ],
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
    path:'',
    children:[
      {
        path:'home',
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
