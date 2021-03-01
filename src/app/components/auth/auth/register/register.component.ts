import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/services/validate-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({});
  passwordField:Boolean=false;
  nextBtn:Boolean=true
  showPassword = false;
  text="! % & ' ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~";
  constructor(public fb: FormBuilder,
    public router: Router) {
    
   }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      fullName:[null,[Validators.required]],
      email: [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      confirm_password: [null, [Validators.required]],
      hear:['']
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }

  get primEmail(){
    return this.registerForm.get('email');
    }
  next(){
// console.log(this.user.value);
this.nextBtn=false;
this.passwordField=true;
  }

  get f(){
    return this.registerForm.controls;
  }

onSubmit(){
  console.log(this.registerForm.value)
}

onTogglePasswordVisibility () {
  this.showPassword = !this.showPassword;
}

  login(){
    this.router.navigate(['/auth/login']);
  }
}
