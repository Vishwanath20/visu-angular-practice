import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myNum = 12.12354;
  email: FormControl;
  reactiveFromGroup = new FormGroup({
    age: new FormControl(null, [ageRangeValidator]),
    email: new FormControl(null, [emailDomainValidator])
  });
  constructor() {}

  ngOnInit() {}

  formSubmit() {
    console.log(
      'Form Data is::' + JSON.stringify(this.reactiveFromGroup.value)
    );
  }
}

function ageRangeValidator(control: AbstractControl) {
  if (
    control.value !== undefined &&
    (isNaN(control.value) || control.value < 18 || control.value > 45)
  ) {
    return { ageRange: true };
  }
  return null;
}

function emailDomainValidator(control: AbstractControl) {
  let emailid = control.value;
  if (emailid !== null) {
    if (emailid && emailid.indexOf('@') != -1) {
      let domain = emailid.split('@');
      if (domain !== 'visu.com') {
        return {
          emailDomain: true
        };
      }
    }
  }
  return null;
}
