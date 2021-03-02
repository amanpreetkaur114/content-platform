import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationSettingsComponent } from './publication-settings.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  {
    path:'',
    component:PublicationSettingsComponent
  },
  {
    path:'tab',
    component:TabComponent,
    children:[
      
  {
    path:'template',
    loadChildren: () => import('../templates/templates.module').then(m => m.TemplatesModule)
  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationSettingsRoutingModule { }
