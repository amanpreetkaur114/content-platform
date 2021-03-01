import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { YourAccountComponent } from './your-account/your-account.component';

const routes: Routes = [
  {
    path:'',
    component:YourAccountComponent,
    children:[
      {
        path:'activity',
        component:ActivityComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'password',
        component:PasswordComponent
      },
      {
        path:'',
        redirectTo :'activity',
        pathMatch:'full',
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
