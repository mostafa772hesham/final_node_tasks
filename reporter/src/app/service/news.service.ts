import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  addNews(formvaleu:any){
    return this.http.post(this.url+"addNews",formvaleu)
  }
  deleteNews(id:any){
    return this.http.delete(this.url+"deleteNews/"+id)
  }
  getNews(){
    return this.http.get<News[]>(this.url+"getAllNews")
  }
  update(formvaleu:any,id:any){
    return this.http.patch(this.url+"editeNews/"+id,formvaleu)
  }
  getsingleNews(id:any){
   return this.http.get<News>(this.url+"getOneNews/"+id)
  }
}
