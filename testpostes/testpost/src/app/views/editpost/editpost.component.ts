import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interface/postsModule';
import { PostService } from 'src/app/servies/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  posts:Posts={}
id:string=this.router.snapshot.params.id
  constructor(private postservies:PostService,private router:ActivatedRoute) { }
update(formvaleu:Posts){
  this.postservies.update(this.id,formvaleu).subscribe(()=>{

  })
}
getSinglepost(){
  this.postservies.getSinglepost(this.id).subscribe((res)=>{
    this.posts=res
  })
}

  ngOnInit(): void {
   this. getSinglepost()
  }

}
