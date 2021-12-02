import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDemoComponent } from '../api-demo.component';
import { PostRouteModule } from '../post-route/post-route.module';

@NgModule({
  imports: [CommonModule, PostRouteModule],
  declarations: [ApiDemoComponent]
})
export class PostModuleModule {}
