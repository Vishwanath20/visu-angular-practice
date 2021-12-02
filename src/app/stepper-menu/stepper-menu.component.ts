import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataServicesService } from '../shared-data-services.service';

@Component({
  selector: 'app-stepper-menu',
  templateUrl: './stepper-menu.component.html',
  styleUrls: ['./stepper-menu.component.css']
})
export class StepperMenuComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private msgService: SharedDataServicesService
  ) {}

  msg: any;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.msgService.changeMsg('New message here');

    //  this.msgService.getMessage.subscribe(message => {
    //     this.msg = message

    //   console.log("----- Message is::"+this.msg);

    // })

    this.msg = this.msgService.getMessage();
    console.log('----- Message is::' + this.msg);
  }

  submit() {
    console.log('------Inside the submit()--------');
  }
}
