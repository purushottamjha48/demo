import { Component, OnInit } from '@angular/core';
import { DataServicesService } from './data-services.service';

interface Records
{
  id:number;
  name:string;
  email:string;
  contact:string;
  address:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// let records:[id:number,name:string,email:string,contact:string,address:string];
export class AppComponent implements OnInit{
  title = 'CRUDExample';
  mydata:Records[];
  users:Records[];
  constructor(private http:DataServicesService){
      this.users=this.http.getUsersList();
      
  }
  ngOnInit(): void {
    localStorage.setItem("users",JSON.stringify(this.users));
    this.getListData();
  }
  getUpdate(id:any)
  {
    localStorage.setItem("id",id);
    console.log("ID:"+id);
    window.open('update','_blank');
   // this.users.push(data);
   // console.log("After Push:"+this.users);
   // localStorage.setItem("users",JSON.stringify(this.users));
   // console.log(data);
   // this.getListData();

  }
  getListData()
  {

   this.mydata=JSON.parse(localStorage.getItem("users")||'[]');
    console.log("GetListData:"+this.mydata)
  }
}
