import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataServicesService {
  constructor() {}

  public editable: any;

  message = 'message from Service';

  public msg = new Subject();

  public getMessage() {
    return this.message;
  }

  currentMessage = this.msg.asObservable();

  changeMsg(m) {
    this.msg.next(m);
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage1 = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
