import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  message = 'Hi.. This message is coming from Child Component';

  ngOnInit() {}

  sendMessageToParent() {
    this.messageEvent.emit(this.message);
  }
}
