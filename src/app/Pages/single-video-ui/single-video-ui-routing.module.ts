import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleVideoUIComponent } from './single-video-ui.component';

const routes: Routes = [{ path: '', component: SingleVideoUIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleVideoUIRoutingModule { }
