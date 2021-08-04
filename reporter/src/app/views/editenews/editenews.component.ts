import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-editenews',
  templateUrl: './editenews.component.html',
  styleUrls: ['./editenews.component.css']
})
export class EditenewsComponent implements OnInit {
  constructor(private serviceNews:NewsService,private router:ActivatedRoute,private rout:Router) { }
  id:any=this.router.snapshot.params.id
  news:News={}
  invalid:boolean=false
  update(formvaleu:any){
    this.serviceNews.update(formvaleu,this.id).subscribe((res)=>{
this.news=res
this.rout.navigate(["/news"])


    },(httpError)=>{
     if(httpError.error.error){
     this.invalid=true
     }
    })
  }
  getOneNews(){
    this.serviceNews.getsingleNews(this.id).subscribe((res)=>{
      this.news=res
    })
  }
  ngOnInit(): void {
    this.getOneNews()
  }

}
