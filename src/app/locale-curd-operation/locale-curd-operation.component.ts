import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale-curd-operation',
  templateUrl: './locale-curd-operation.component.html',
  styleUrls: ['./locale-curd-operation.component.css']
})
export class LocaleCurdOperationComponent implements OnInit {
  constructor() {}

  searchData;

  arr = [
    { id: 1, name: 'Test1', marks: 95, grade: 'A' },
    { id: 2, name: 'Test2', marks: 65, grade: 'C' },
    { id: 3, name: 'Test3', marks: 50, grade: 'D' }
  ];

  showtable = false;
  mainTable = true;

  empObj = {};
  filterId;
  filtername;
  filtermarks;
  filtergrade;

  ngOnInit() {}

  searchDatafun(searchContent: string) {
    console.log('searchContent::' + searchContent);

    for (let data of this.arr) {
      if (
        data.id == this.searchData ||
        data.name == this.searchData ||
        data.marks == this.searchData ||
        data.grade == this.searchData
      ) {
        console.log('inside the if block');
        console.log('data.id:::' + data.id);
        console.log('data.name:::' + data.name);
        console.log('data.marks:::' + data.marks);
        console.log('data.grade:::' + data.grade);

        this.showtable = true;
        this.mainTable = false;

        this.filterId = data.id;
        this.filtername = data.name;
        this.filtermarks = data.marks;
        this.filtergrade = data.grade;
      }
    }
  }
}
