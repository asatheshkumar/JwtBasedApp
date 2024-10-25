import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU0MzQ4MDksImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.k0QRn2CCNuLd3_5OYRBJa2p2kAGUUwEXvP3uvEf98qY";


  loginObj: any = {
    "FullName": "sathesh",
    "EmailId": "",
    "Password": "",
    "Designation": "admin",
    "UserMessage": "string",
    "AccessToken": "string",
    "CreatedDate": "2024-09-04T12:34:35.979Z",
  };
  constructor(private http: HttpClient, private router: Router){}

  onLogin() {
    debugger;
    this.http.post('http://localhost:5186/api/Login/PostLoginDetails', this.loginObj).subscribe((res:any)=>{
      if(res) {
        alert('login Success');
        localStorage.setItem('loginTOken', res.accessToken);
        this.router.navigateByUrl('/dashboard'); 
      } else {
        alert(res.message);
      }
    })
  }


}

