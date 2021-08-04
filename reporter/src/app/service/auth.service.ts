import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  signUp(formvaleu:any){
  return  this.http.post(this.url+"addReporter",formvaleu)
  }
  logout(){
    return this.http.delete(this.url+"logout")
  }
  logoutall(){
    return this.http.delete(this.url+"logoutall")
  }
  login(formvaleu:any){
    return this.http.post(this.url+"login",formvaleu)
  }
  gettoken(){
    return localStorage.getItem("token")
  }

  
}
