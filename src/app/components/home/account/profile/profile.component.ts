import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
form:FormGroup;
file:File ;
image;


  constructor(public fb:FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      image:[this.image],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      company:[],
      personalSkill:['',[Validators.required]],
      websiteLink:[],
      phoneNumber:['',[Validators.required]],
      location:['',[Validators.required]],
      timeZone:['',[Validators.required]],
      department:['',[Validators.required]],
      portfolioUrl:[],
    })
  }



  
  get f(){
    return this.form.controls;
  }
  get primEmail(){
    return this.form.get('email');
    }

  onFileSelected(files:FileList){
    console.log(files);
    this.file = files.item(0);
    var Reader= new FileReader();
    Reader.onload=(event:any)=>{
        this.image=event.target.result;
    }
    Reader.readAsDataURL(this.file);
  }


delete(){
  this.file.slice(1);
  this.image="";
}
  onSubmit(){
    console.log(this.form.value)
    if(this.form.valid){
      this.toastr.success("Succesfully Saved")
    }
    else{
      this.toastr.error("Unsuccesfull")
    }
  }

}
