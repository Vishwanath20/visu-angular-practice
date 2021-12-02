import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { LocalSeesionStorageComponent } from '../local-seesion-storage/local-seesion-storage.component';
import { ApiDemoComponent } from '../api-demo/api-demo.component';
import { StepperMenuComponent } from '../stepper-menu/stepper-menu.component';
import { DateValidatorComponent } from '../date-validator/date-validator.component';
import { LocaleCurdOperationComponent } from '../locale-curd-operation/locale-curd-operation.component';
import { InternerConnectionStausComponent } from '../interner-connection-staus/interner-connection-staus.component';
import { RxjsLearnComponent } from '../rxjs-learn/rxjs-learn.component';
import { ParentComponent } from '../DataPassingBetweenComponents/parent/parent.component';
import { ChildComponent } from '../DataPassingBetweenComponents/parent/child/child.component';
import { SiblingComponent } from '../DataPassingBetweenComponents/sibling/sibling.component';
import { ReactiveformDemoComponent } from '../reactiveform-demo/reactiveform-demo.component';
import { Apidemo2Component } from '../apidemo2/apidemo2.component';


const routes: Routes = [
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'localSession', component: LocalSeesionStorageComponent },
  {
    path: 'apiDemo',
    component: ApiDemoComponent
  },
  { path: 'stepperMenu', component: StepperMenuComponent },
  { path: 'dateValidator', component: DateValidatorComponent },
  { path: 'localeCurd', component: LocaleCurdOperationComponent },
  {path: 'internetConnection', component: InternerConnectionStausComponent},
  {path: 'rxjs', component: RxjsLearnComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'sibling', component: SiblingComponent},
  {
   path:'reactiveformDemo', component: ReactiveformDemoComponent
  },
  {
    path:'apidemo2', component: Apidemo2Component
   }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [],
  bootstrap: []
})
export class AppRoutingModule {}
