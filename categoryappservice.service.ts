import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CategoryThree } from './category-three';
// import { CategoryTwo } from './category-two';
import { CategoryOne } from './categoryOne';


@Injectable({
  providedIn: 'root'
})
export class CategoryappserviceService {

  serverURL:string

  constructor(private httpsvc:HttpClient) 
  { 

    this.serverURL="http://localhost:7077/"
  }

  getTaskByTid(cid:number):Observable<CategoryOne[]>{

    return this.httpsvc.get<CategoryOne[]>(this.serverURL+"tasklist/taskmanager/"+cid)

  }
  registerTaskList(cid:number,newCategory:CategoryOne):Observable<CategoryOne>{
    //format= key=value&key=value
    var taskdata = "cid="+cid+"&tid="+newCategory.tid+
          "&tdescription="+newCategory.tdescription
   
     console.log(taskdata)

    var httpOptions = { // add the header for request body format type
        headers: new HttpHeaders(
          {"Content-Type":"application/x-www-form-urlencoded"})
    }

    return this.httpsvc.post<CategoryOne>(
      this.serverURL+"tasklist/newtask",taskdata,httpOptions)

}

deleteTaskByTid(cid:number,tid:number):Observable<String>{
  return this.httpsvc.get<String>(
      this.serverURL+"tid/"+tid+"/task/delete/"+tid)
}

}