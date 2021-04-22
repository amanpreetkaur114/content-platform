import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-template',
  templateUrl: './brief-template.component.html',
  styleUrls: ['./brief-template.component.css']
})
export class BriefTemplateComponent implements OnInit {
  campaign: any;
 
  constructor() { 
    this.campaign=[
      {id:1,text:'<script> pholcidCallback(1885725050) </script>'},
    ]
  }

  ngOnInit(): void {
  }

}
