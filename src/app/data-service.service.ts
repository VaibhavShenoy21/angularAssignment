import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // apiHeader = "http://localhost:3000/posts"
  apiHeader = "https://test-api-zrnx.onrender.com/users"
  constructor(private http: HttpClient) { }

  //POST Data to Fake JSON Server
  postUser(data:any){
    return this.http.post<any>(this.apiHeader,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET Data to Fake JSON Server
  getUsers(){
    return this.http.get<any>(this.apiHeader)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // //POST Data to Fake JSON Server
  // updateUser(data:any,id:number){
  //   return this.http.put<any>(this.apiHeader+"/"+id,data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  //DELETE Data from Fake JSON Server
  deleteUser(id:number){
    return this.http.delete<any>(this.apiHeader+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
