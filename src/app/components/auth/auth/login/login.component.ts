import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new FormGroup({});
  passwordField:Boolean=false;
  nextBtn:Boolean=true
  showPassword = false;
  constructor(public fb: FormBuilder,
    public router: Router) {
    
   }

  ngOnInit(): void {
    this.user=this.fb.group({
      email: [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:[null,Validators.required],
    })
  }

  get primEmail(){
    return this.user.get('email');
    }
  next(){
// console.log(this.user.value);
this.nextBtn=false;
this.passwordField=true;
  }

onSubmit(){
  console.log(this.user.value)
}

onTogglePasswordVisibility () {
  this.showPassword = !this.showPassword;
}

register(){
  this.router.navigate(['/auth/register']);
}
}
