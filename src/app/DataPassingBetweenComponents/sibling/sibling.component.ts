import { Component, OnInit } from '@angular/core';
import { SharedDataServicesService } from '../../shared-data-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message:string;
  subscription: Subscription;

  constructor(
    private sharedDataService: SharedDataServicesService
  ) { }

  ngOnInit() {
    this.subscription = this.sharedDataService.currentMessage1.subscribe(msg =>{
      this.message = msg;
    })
  }

  newMessage(){
    this.sharedDataService.changeMessage('Message from Sibling');
  }

}