import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/services/validate-password';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
form:FormGroup;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      oldpass:[null,[Validators.required]],
      newPassword:[null,[Validators.required]],

      confirmPass:[null,[Validators.required]],
    
    }, { 
      validator: ConfirmedValidator('newPassword', 'confirmPass')
    });

  }

onSubmit(){
  console.log(this.form.value);
}

}
