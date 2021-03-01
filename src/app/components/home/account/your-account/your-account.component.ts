import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css']
})
export class YourAccountComponent implements OnInit {
  currentMenu = 1;
  newLoad = false;

  constructor(private actRoute: ActivatedRoute, public router :Router) { }

  ngOnInit(): void {
    const url = window.location.href;
    this.newLoad = true;
    if (url.includes('activity')) {
      document.getElementById('activity');
      
    } else if (url.includes('password')) {
      document.getElementById('password');
    } else if (url.includes('profile')) {
      document.getElementById('profile');
    } 
     else {
      document.getElementById('activity');
    }
   }
   
  onClickMenu( index: number) {
    this.currentMenu = index;

    const newLoad = this.newLoad;
    this.newLoad = false;

    switch (index) {
      case 1:
        this.router.navigate([newLoad ? this.router.url : '/home/account/activity']);
      break;

      case 2:
      this.router.navigate([newLoad ? this.router.url: '/home/account/password']);
      break;

      case 3:
      this.router.navigate([newLoad ? this.router.url : '/home/account/profile']);
      break;

     
      default:
      this.router.navigate([newLoad ? this.router.url :'/home/account/activity']);
      break;
    }
  }  
}
