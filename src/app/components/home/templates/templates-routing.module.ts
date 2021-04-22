import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefTemplateComponent } from './brief-template/brief-template.component';
import { BriefComponent } from './brief/brief.component';
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
},
{
  path:'brief',
  component:BriefComponent
},
{
  path:'brief-template',
  component:BriefTemplateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
