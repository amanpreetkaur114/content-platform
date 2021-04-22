import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  onLogin(user){
    const param={
      'userName': user.email,
      'password':user.password,
    };
    return this.http.post(urls.apiUrl+'auth/Login',param);
    // .map(pipe=>(res=>{
    //   console.log(res['token']);
    //   const token = localStorage.setItem('token', res['token']);
    //   console.log(token);
    // })
  }
}
