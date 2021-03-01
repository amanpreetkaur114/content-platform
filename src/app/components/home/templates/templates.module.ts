import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { WorkflowTemplateComponent } from './workflow-template/workflow-template.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [WorkflowTemplateComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule,
    
  ]
})
export class TemplatesModule { }
