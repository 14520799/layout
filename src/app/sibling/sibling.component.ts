import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-sibling',
  template: `{{message}}
  <button (click)="newMessage()">New Message</button>
  <button (click)="sendJSON()">CLICK</button>
  `,
  providers: [DataService]
})
export class SiblingComponent implements OnInit {

  message: string;
  @Output() objEvent = new EventEmitter();
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this.data.changeMessage("Hello from Sibling") 
  }

  getJSON(){
    console.log(this.data.json.firstMember);
  }
  sendJSON(){
    this.objEvent.emit(this.data.json)
  }

}
