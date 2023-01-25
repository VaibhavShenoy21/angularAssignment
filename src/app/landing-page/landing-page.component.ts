import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userData:any;
  constructor(private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //GET call to fetch all Users
  getAllUsers(){
    this.dataService.getUsers().subscribe((res)=>{
      this.userData = res;
      console.log("userdata",this.userData)
  })
}
  //DELETE call to Delete a User
  deleteUser(data:any){
    if (confirm("Do you want to Delete User?") == true) {
    this.dataService.deleteUser(data.id)
    .subscribe(res=>{
      alert("User Deleted!");
      this.getAllUsers();
    })
  }else{
    alert("User Delete Aborted!");
  }
}
  //Routes to Add user form page
  addUser(){
    this.router.navigate(['addUser']);
  }
}
