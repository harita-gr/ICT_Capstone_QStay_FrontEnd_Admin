import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from '../classes/user';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


 

  // _url='http://localhost:3000/';
  _url='https://qstay-backend.herokuapp.com/';
  
  
  constructor(private _http: HttpClient,
               private _router:Router) { }

  adminLogin(user:any){
    return this._http.post<any>(this._url+'user/adminLogin',user);    
  }

  enroll(user: User){
     return this._http.post<any>(this._url+'user/signUp',user);
     //Post will return response as observable. Subscribe it in component
  }

  login(user: any){
    return this._http.post<any>(this._url+'user/signIn',user)
              .pipe(catchError(this.errorHandler));
    //Post will return response as observable. Subscribe it in component
 }

 getUserList(){
  return this._http.get<any>(this._url+"admin/users/getList");   
}

getUser(id: any) {
  return this._http.get<any>(this._url+"admin/users/getUser/"+id); 
}

updateUser(selectedUser: User, id: string) {
  return this._http.post<any>(this._url+"admin/users/updateUser/"+id,selectedUser); 
}

deleteUser(id: any) {
  return this._http.delete(this._url+"admin/users/deleteUser/"+id);
}

getUserCount() {
  return this._http.get<any>(this._url+"admin/users/getCount"); 
}

 errorHandler(error:HttpErrorResponse){

   return throwError(error);
 }
  
 loggedIn(){
  return !!localStorage.getItem('token');
}

logOutUser(){
  let res = window.confirm('Are you sure you want to logout?');
  if (res){
    localStorage.removeItem('token');
  }
  
  // this._router.navigate(['']);

}

getToken(){
  console.log('from enrol service -' + localStorage.getItem('token'));
 return localStorage.getItem('token');
}

getRecentUsers() {
  return this._http.get<any>(this._url+"admin/users/getLatestList");
}


}
