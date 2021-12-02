import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interner-connection-staus',
  templateUrl: './interner-connection-staus.component.html',
  styleUrls: ['./interner-connection-staus.component.css']
})
export class InternerConnectionStausComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const a = 10;
    console.log(a);
    // a = 20;

    const obj = {
      name: 'abc',
      age: 20
    };

    console.log(obj.name);

    obj.name = 'zxs';

    console.log(obj.name);
  }
}
