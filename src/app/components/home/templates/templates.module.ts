import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { WorkflowComponent } from './workflow/workflow.component';
import { WorkflowTemplateComponent } from './workflow-template/workflow-template.component';


@NgModule({
  declarations: [WorkflowTemplateComponent, WorkflowComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule,
    
  ],
  exports:[WorkflowTemplateComponent]
})
export class TemplatesModule { }
