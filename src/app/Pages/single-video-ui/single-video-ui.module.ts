import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleVideoUIRoutingModule } from './single-video-ui-routing.module';
import { SingleVideoUIComponent } from './single-video-ui.component';
 import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    SingleVideoUIComponent
  ],
  imports: [
    CommonModule,
    SingleVideoUIRoutingModule,
    FormsModule
 
    
  ]
})
export class SingleVideoUIModule { }
