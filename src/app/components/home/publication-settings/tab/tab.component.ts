import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onWorkflow(){
    this.router.navigate(['home/publication-settings/tab/template/workflow']);
  }

  onBrief(){
    this.router.navigate(['home/publication-settings/tab/template/brief']);
  }
}
