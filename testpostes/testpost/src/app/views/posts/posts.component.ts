import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/postsModule';
import { PostService } from 'src/app/servies/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[]
  constructor(private postserviese:PostService) { }
getposts(){
this.postserviese.getpost().subscribe((res)=>{
 this.posts=res
})

}
addposts(formvaleu:Posts){
  this.postserviese.addpost(formvaleu).subscribe(()=>{
    this.posts.splice(0,0,formvaleu)
  })
}
delete(el:Posts){
  this.postserviese.delet(el.id).subscribe(()=>{
   let index=this.posts.indexOf(el)
   this.posts.splice(index,1)
  })
}
  ngOnInit(): void {
   this.getposts()
  }

}
