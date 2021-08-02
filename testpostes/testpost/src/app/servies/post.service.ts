import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interface/postsModule';

@Injectable({
  providedIn: 'root'
})
export class PostService {
url="https://jsonplaceholder.typicode.com/comments/"
  constructor(private http:HttpClient) { }
  getpost(){
  return  this.http.get<Posts[]>(this.url)
  }
  addpost(posts:Posts){
    return this.http.post(this.url,posts)
  }
  delet(id:any){
    return this.http.delete(this.url+id)
  }
  update(id:any,post:Posts){
   return this.http.patch(this.url+id,post)
  }
  getSinglepost(id:any){
   return this.http.get<Posts>(this.url+id)
  }
}
