import { TestRequest } from '@angular/common/http/testing';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-apidemo2',
  templateUrl: './apidemo2.component.html',
  styleUrls: ['./apidemo2.component.css']
})
export class Apidemo2Component implements OnInit {
  Students: any = [];
  totalMarkss = 0;
  totalMarksValue;
  iddd;
  marksss;

  constructor(private httpService: ApiService) {}

  mapp: any = {};
  ngOnInit() {
    this.getResponse();
  }

  public openPDF(): void {
    let DATA = document.getElementById('htmlData');
    html2canvas(DATA, { scrollY: -window.scrollY, scale: 1 }).then(canvas => {
      let background: '#fff';
      let imgWidth = 205;
      let pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/jpeg');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('api-demo-data.pdf'); // Generated PDF
    });
  }

  getResponse() {
    this.httpService.getApiResponse1().subscribe((data: any) => {
      this.Students = data;
      console.log('---------API Call here ::' + JSON.stringify(this.Students));
      this.findsum(this.Students);
    });
  }

  // getstudentDataWithID(StudentID)
  findsum(data) {
    this.Students = data;

    var newObj = {};
    var newMark;
    var totalMark;

    this.Students.forEach((table: any) => {
      if (!newObj[table.StudentID]) {
        newObj[table.StudentID] = {};
        newObj[table.StudentID]['Mark'] = 0;
      }
      newObj[table.StudentID]['Mark'] += table.Mark;
      newMark = newObj[table.StudentID]['Mark'];
    });

    console.log('sum isss:: ');
    console.log(newObj);

    for (var key in newObj) {
      this.iddd = key;
      this.marksss = newObj[key].Mark;
      console.log(
        `Student ID ${this.iddd} and Total Marks is: ${this.marksss}`
      );

      // if (newObj.hasOwnProperty(key)) {
      //   console.log(key + ' -> ' + JSON.stringify(newObj[key]));
      // }
    }

    //---------------------------------------
    // var holder = {};

    // this.Students.forEach(function(d: any) {
    //   if (holder.hasOwnProperty(d.StudentID)) {
    //     holder[d.StudentID] = holder[d.StudentID] + d.Mark;
    //   } else {
    //     holder[d.StudentID] = d.Mark;
    //   }
    // });

    // var obj2 = [];

    // for (var prop in holder) {
    //   obj2.push({ StudentID: prop, Mark: holder[prop] });
    // }

    // console.log(obj2);

    //console.log('#########  findsum()' + JSON.stringify(this.Students));

    // this.Students.map((data: any) => {
    //   let item = data['StudentID'];
    //   //this.Students.reduce();
    // });

    // this.httpService.getstudentDataWithID(stuID).subscribe((data: any) => {
    //   for (let j = 0; j < data.length; j++) {
    //     this.totalMarkss += this.totalMarksValue[j].Marks;
    //     console.log(
    //       '$$$ bulktheory findsum()- this.totalMarksValue[j].Marks:: ' +
    //         this.totalMarkss
    //     );
    //   }
    // });

    // for (let j = 0; j < data.length; j++) {
    //   this.totalMarkss += this.totalMarksValue[j].Marks;
    //   console.log(
    //     '$$$ bulktheory findsum()- this.totalMarksValue[j].Marks:: ' +
    //       this.totalMarksValue[j].Marks
    //   );
    // }
    // console.log('API Data is getMarks()::' + JSON.stringify(data));
    // data.map(item => {
    //   let stuID = item['StudentID'];
    //   console.log('Student ID:: ' + stuID);
    //   // arr.push(stuID);
    //   // console.log('Arr of stuID is:' + arr);
    //   // let stuMark = item['Marks'];
    //   // console.log('stuMark::: ' + stuMark);
    //   // this.totalMarkss += item['Marks'];
    //   // console.log('this.totalMarkss+-->' + this.totalMarkss);
    // });
    // const map = {};
    // data.forEach((arr: any) => {
    //   arr.forEach(obj => {
    //     const { key, value } = obj;
    //     if (map[key]) {
    //       map[key].push(value);
    //     } else {
    //       map[key] = [value];
    //     }
    //   });
    // });
    // console.log(map);
  }
}
