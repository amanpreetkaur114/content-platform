import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowTemplateComponent } from './workflow-template/workflow-template.component';

const routes: Routes = [
  {path:'workflow-template',
  component:WorkflowTemplateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
