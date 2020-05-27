import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service'
import { SiblingComponent } from '../sibling/sibling.component'
import { Config } from 'protractor';

@Component({
  selector: 'app-parent',
  template: `
  Message: 
  <app-sibling (objEvent)="getJSONparent()"></app-sibling>
  <app-child></app-child>
  `,
  providers: [DataService]

})
export class ParentComponent implements OnInit {

 // @ViewChild(DataService) service: DataService;
  message: string;
  obj: any;
  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    //this.getDatawithViewChild();
  }

  //fromSibing to Parent data
  getJSONparent(){
    //console.log('hello')
    console.log(this.data.json);
  }

  // getDatawithViewChild(){
  //   console.log(this.service.json)
  // }

  
}
