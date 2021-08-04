import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporter } from '../interface/reporter';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
getprofile(){
 return this.http.get<Reporter>(this.url+"profile")
}


}
