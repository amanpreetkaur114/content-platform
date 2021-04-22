import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {
  brieftemplate: { id: number; label: string; body: string; }[];
  hideme=[];

  constructor(public router: Router) { 
    this.brieftemplate=[
    {id:1,label:'Super awesome video template',body:'content1'},
    {id:2,label:'A new brief template', body:'content2'}

    ]
  }

  ngOnInit(): void {
  }

  onBriefTemplate(){
    this.router.navigate(['/home/publication-settings/tab/template/brief-template']);
  }
}
