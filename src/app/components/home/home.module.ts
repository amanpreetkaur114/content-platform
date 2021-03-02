import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PublicationSettingsComponent } from './publication-settings/publication-settings.component';




@NgModule({
  declarations: [HomeComponent, PublicationSettingsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule

    
  ]
})
export class HomeModule { }
