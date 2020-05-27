import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import form_template  from '../../assets/form_template';
 

@Component({
  selector: 'app-use-case1',
  templateUrl: './use-case1.component.html',
  styleUrls: ['./use-case1.component.css']
})
export class UseCase1Component implements OnInit {
  myFormGroup: FormGroup;
  formTemplate:any = form_template;

  constructor() { }

  ngOnInit() {
    let group={}
    form_template.forEach(input_template=>{
      group [input_template.label] = new FormControl('');
    })
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit(){
    console.log(this.myFormGroup.value);
  }

}
