import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {
  constructor(private httpService: ApiService) {}

  ngOnInit() {
    this.getResponse();
    const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      filter(v => v % 2 === 0),
      map(v => v * 10)
    );
    ob$.subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('Completed')
    );
  }

  // getResponse() {
  //   this.httpService.getApiResponse().subscribe(data => {
  //     console.log(data);
  //   });
  // }

  getResponse() {
    // this.httpService.getApiResponse().subscribe(data => {
    //   console.log(data);
    // });

    forkJoin(
      this.httpService.getApiResponse1(),
      this.httpService.getApiResponse2()
    ).subscribe(([data1]) => {
      console.log(data1);
      //console.log(data2);
    });
  }
}
