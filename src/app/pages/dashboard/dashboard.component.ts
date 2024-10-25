import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users: any[]=[];
  constructor(private http: HttpClient){
    this.loadUsers();
  }

  loadUsers() {
    debugger;
    this.http.get('http://localhost:5186/api/Product/GetAllProducts').subscribe((res:any)=>{
      this.users = res.data;
    })
  }
}
