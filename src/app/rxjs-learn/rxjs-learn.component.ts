import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit {
  constructor() {}

  // ngOnInit() {
  //   const subject_test = new Subject();

  //   subject_test.subscribe(data => {
  //     console.log('From Subject 1:: ' + data);
  //   });

  //   subject_test.subscribe(data => {
  //     console.log('From Subject 2:: ' + data);
  //   });

  //   // subject_test.next('A');
  //   // subject_test.next('B');

  //   let final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(
  //     map(e => e.response)
  //   );
  //   let subscriber = final_val.subscribe(subject_test);
  // }

  // // >>>>>>>>>> for Replay Subject Example
  // ngOnInit() {
  //   const replay_subject = new ReplaySubject(1);
  //   replay_subject.subscribe({
  //     next: v => console.log(`Testing Replay Subject A: ${v}`)
  //   });

  //   replay_subject.next(1);
  //   replay_subject.next(2);
  //   replay_subject.next(3);
  //   replay_subject.subscribe({
  //     next: v => console.log(`Testing Replay Subject B: ${v}`)
  //   });

  //   replay_subject.next(5);
  // }

  // >>>>>>>> for Async Subject Example
  ngOnInit() {
    const async_subject = new AsyncSubject();

    async_subject.subscribe({
      next: v => console.log(`Testing Async Subject A: ${v}`)
    });

    async_subject.next(1);
    async_subject.next(2);
    async_subject.complete();
    async_subject.next(3);

    async_subject.subscribe({
      next: v => console.log(`Testing Async Subject B: ${v}`)
    });
    async_subject.subscribe({
      next: v => console.log(`Testing Async Subject C: ${v}`)
    });
  }
}
