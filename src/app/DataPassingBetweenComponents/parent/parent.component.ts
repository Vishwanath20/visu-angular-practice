import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../../DataPassingBetweenComponents/parent/child/child.component';
import { Subscription } from 'rxjs';
import { SharedDataServicesService } from '../../shared-data-services.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  parentMessage = 'Hii.. This message is coming from parent';

  @ViewChild(ChildComponent) child;

  message;
  messageFromChild;
  subscription: Subscription;
  msgSub;

  constructor( private sharedDataService: SharedDataServicesService) {}

  ngOnInit() {
    this.subscription = this.sharedDataService.currentMessage1.subscribe(msg => {
      this.msgSub = msg;
    })
  }

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessageFromChild(event) {
    this.messageFromChild = event;
  }
}
