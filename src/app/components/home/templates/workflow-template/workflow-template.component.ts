import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { TemplatesService } from 'src/app/services/templates.service';

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
  constructor(public fb: FormBuilder,
    public templateService: TemplatesService,
    public auth: AuthenticateService,
    public dataStore: DataStoreService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      description:['',[Validators.required]],
      steps: this.fb.array([]),
    });
    this.addNewAlias();
  }

 
 get array(){
    return this.firstFormGroup.get('steps') as FormArray;
   
  }

  addNewAlias() {
    this.array.push(this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      assignTo:['',[Validators.required]],
      description: ['',[Validators.required]],
      stepType:[1],
      durationDays: ['',[Validators.required]],
      approvers:[]
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
    this.templateService.onSaveWorkflowTemplate(this.firstFormGroup.value).subscribe(res => {
      console.log(res);
    })
  }


  close(index){
    console.log(event);
    // this.array.
    this.array.removeAt(index)


  }

  get f () {
    return this.firstFormGroup.controls;
  }
}
