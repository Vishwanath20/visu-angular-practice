import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LocalSeesionStorageComponent } from './local-seesion-storage/local-seesion-storage.component';
import { ApiService } from './api.service';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { StepperMenuComponent } from './stepper-menu/stepper-menu.component';
import { DateValidatorComponent } from './date-validator/date-validator.component';
import { LocaleCurdOperationComponent } from './locale-curd-operation/locale-curd-operation.component';
import { InternerConnectionStausComponent } from './interner-connection-staus/interner-connection-staus.component';
import { SharedDataServicesService } from './shared-data-services.service';
import { ParentComponent } from './DataPassingBetweenComponents/parent/parent.component';
import { ChildComponent } from './DataPassingBetweenComponents/parent/child/child.component';
import { SiblingComponent } from './DataPassingBetweenComponents/sibling/sibling.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterCeptorService } from './inter-ceptor.service';
import { Interceptor2Service } from './interceptor2.service';
import { Apidemo2Component } from './apidemo2/apidemo2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ReactiveFormComponent,
    LocalSeesionStorageComponent,
    ApiDemoComponent,
    StepperMenuComponent,
    DateValidatorComponent,
    LocaleCurdOperationComponent,
    InternerConnectionStausComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    Apidemo2Component
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ApiService,
    SharedDataServicesService,
    { provide: HTTP_INTERCEPTORS, useClass: InterCeptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor2Service, multi: true }
  ]
})
export class AppModule {}
