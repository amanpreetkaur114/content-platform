import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowTemplateComponent } from './workflow-template/workflow-template.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path:'workflow-template',
    component:WorkflowTemplateComponent
},
{
  path:'workflow',
  component:WorkflowComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
