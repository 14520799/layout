import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });
  }

  //convert getters for easy access to form fields
  get f() {return this.dynamicForm.controls}
  get t() {return this.f.tickets as FormArray;}

  onChangeTickets(e){
    const numberOfTickets = e.target.value || 0;
    if(this.t.length < numberOfTickets) {
      for(let i=this.t.length; i < numberOfTickets; i++){
        this.t.push(this.fb.group({
          name: ['', Validators.required],
          email: ['', Validators.email]
        }));
      }
    }else{
      for(let i = this.t.length; i>=numberOfTickets; i--){
        this.t.removeAt(i);
      }
    }
  }

  onSubmit(){
    this.submitted = true;
    //stop here if form is invalid
    if(this.dynamicForm.valid){
      return;
    }
    //display form values on success
    alert('Success' + JSON.stringify(this.dynamicForm.value, null, 4))
  }

  onReset(){
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clearAsyncValidators();
  }

  onClear(){
    this.submitted = false;
    this.t.reset();
  }

}
