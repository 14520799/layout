import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UseCase1Component } from './use-case1/use-case1.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutGenerateComponent } from './layout-generate/layout-generate.component';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UseCase1Component,
    FormArrayComponent,
    DynamicFormComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    LayoutGenerateComponent,
    EditLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
