import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <button (click)="sendMessage()">..</button>
`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message: string = "Mess from child"
  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() { }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }
  
  ngOnInit() {
  }

}
