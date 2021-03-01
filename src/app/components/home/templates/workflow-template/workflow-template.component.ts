import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-workflow-template',
  templateUrl: './workflow-template.component.html',
  styleUrls: ['./workflow-template.component.css']
})
export class WorkflowTemplateComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  completed:Boolean=true;

  isLinear = false;
  firstFormGroup=new FormGroup({});
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: this.fb.array([]),
    });
    this.addNewAlias();
  }

 
 get array(){
    return this.firstFormGroup.get('firstCtrl') as FormArray;
   
  }

  addNewAlias() {
    this.array.push(this.fb.group({
      title:[],
      assignTo:[],
      description:[],
      duration:[]
    }));
  }

  onExpand(){
    this.completed=true;

  }

  onCollapse(){
    this.completed=false;
  }

  onCancel(){
    this.firstFormGroup.reset();
    this.array.clear()
  }

  onSubmit(){
  console.log(this.firstFormGroup.value)
  }


  close(index){
    console.log(event);
    // this.array.
    this.array.removeAt(index)


  }

}
