import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-reactiveform-demo',
  templateUrl: './reactiveform-demo.component.html',
  styleUrls: ['./reactiveform-demo.component.css']
})
export class ReactiveformDemoComponent implements OnInit {
  reactiveFormGroup;
  constructor() {}

  ngOnInit() {
    this.reactiveFormGroup = new FormGroup({
      name: new FormControl(RequiredValidator)
    });
  }
  add() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <br>
      <input type="text">`;
    document.querySelector('.showInputField').appendChild(row);
  }

  // remove() {
  //   let row = document.createElement('div');
  //   document.querySelector('.showInputField').removeChild(row);
  // }
}
