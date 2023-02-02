import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'studio', loadChildren: () => import('./Pages/studio/studio.module').then(m => m.StudioModule) },
{ path: 'singleVideoUI/:id', loadChildren: () => import('./Pages/single-video-ui/single-video-ui.module').then(m => m.SingleVideoUIModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
