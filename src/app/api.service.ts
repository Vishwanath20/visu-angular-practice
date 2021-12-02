import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  url1 = 'https://jsonplaceholder.typicode.com/posts';
  url2 = 'https://jsonplaceholder.typicode.com/todos';
  url3 = 'https://jsonplaceholder.typicode.com/users';

  url4 =
    'https://api.a2pl.in/Api/Report/GetTheoryandVivaMarkResultByEventID?EventID=4';

  // url5 = 'https://api.a2pl.in/Api/Report/GetTheoryandVivaMarkResultByEventIDStudentID/?EventID=' + EventID +'&StudentID=' + StudentID';

  getApiResponse1() {
    console.log('######## getApiResponse1() called ########');
    return this.http.get(this.url1);
  }

  getApiResponse2() {
    console.log('######## getApiResponse2() called ########');
    return this.http.get(this.url2);
  }

  getStudentData() {
    return this.http.get(this.url4);
  }

  getstudentDataWithID(StudentID) {
    console.log(
      '########## inside api service - getstudentDataWithID(StudentID) - '
    );
    return this.http.get(
      'https://api.a2pl.in/Api/Report/GetTheoryandVivaMarkResultByEventIDStudentID/?EventID=4' +
        '&StudentID=' +
        StudentID
    );
  }
}
