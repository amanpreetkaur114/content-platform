import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  isLinear = false;
  label1 = "Compose Draft";
  label2 = "Edit 1";
  label3 = "Edit 2";
  label4 = "Final Check";
  label5 = "Completed";
  constructor(
    public router : Router) {}

  ngOnInit() {
  }

  onCreateWorkflow(){
    this.router.navigate(['/home/publication-settings/tab/template/workflow-template'])
  }
}
