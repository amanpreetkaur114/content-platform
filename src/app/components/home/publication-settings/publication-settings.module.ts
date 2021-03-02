import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationSettingsRoutingModule } from './publication-settings-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    PublicationSettingsRoutingModule,
    TemplatesModule
  ]
})
export class PublicationSettingsModule { }
