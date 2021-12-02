import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-date-validator',
  templateUrl: './date-validator.component.html',
  styleUrls: ['./date-validator.component.css']
})
export class DateValidatorComponent implements OnInit {
  date;
  dateValidatorFromGroup = new FormGroup({
    date_end: new FormControl()
  });

  constructor() {}

  ngOnInit() {
    this.date = new Date().toISOString().slice(0, 10);
  }

  dateSubmit() {
    console.log('Date form has been submitted!!!');
    // var date = formatDate(new Date(), 'dd-MM-yyyy', 'en_US');
    var date = new Date();
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var newdate = year + '-' + month + '-' + day;
    console.log(`Today's date is:: ${newdate}`);

    var getTime = date.getTime();
    console.log('get time is::' + getTime);

    var selectedDate = this.dateValidatorFromGroup.get('date_end').value;
    console.log(`selectedDate  value is:: ${selectedDate}`);

    if (selectedDate > newdate) {
      console.log(`selectedDate is greater then today's date`);
    }
  }
}
