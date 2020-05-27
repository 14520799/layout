import { Component } from '@angular/core';
import { FormGroup,FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: "",
      skills: this.fb.array([]),
    })
   }


  //Array
  get skills(): FormArray{
    return this.skillsForm.get("skills") as FormArray
  }

  //Object
  newSkill(): FormGroup{
    return this.fb.group({
      skill: "",
      exp: "",
    })
  }

  //Add object to Array
  addSkills(){
    this.skills.push(this.newSkill());
  }

  //Delete Object[i] in Array
  removeSkill(i: number){
    this.skills.removeAt(i);
  }

  onSubmit(){
    console.log(this.skillsForm.value);
  }
}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
