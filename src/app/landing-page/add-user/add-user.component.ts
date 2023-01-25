import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  //Create Form to take user input
  createForm(){
    this.userForm = new FormGroup({
      email: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      middleName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required)
    })
  }

    //POST call to Add a new User
    postUserDetails(){
      if (confirm("Do you want to save changes?") == true) {
        let payload = {
          "email":this.userForm.value.email,
          "firstName":this.userForm.value.firstName,
          "middleName":this.userForm.value.middleName,
          "lastName":this.userForm.value.lastName,
        }
        console.log("payload",payload)
        this.dataService.postUser(payload).subscribe(res=>{
          alert("User Added Successfully");
          this.router.navigate(['']);
        })
    } else {
      this.userForm.reset();
    }
}
  //On Cancel Button CLick
  cancelDetails(){
    this.userForm.reset();
    this.router.navigate(['']);
  }
}
