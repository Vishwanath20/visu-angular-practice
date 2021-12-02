import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiDemoComponent } from '../api-demo.component';

const routes: Routes = [
  { path: "", component: ApiDemoComponent},
];

@NgModule({
  exports: [RouterModule],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PostRouteModule { }