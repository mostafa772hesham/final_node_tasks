import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interface/news';
import { Reporter } from 'src/app/interface/reporter';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  news:News={}
  constructor(private serviceNews:NewsService,private router:Router) { }
  addNews(formvaleu:any){
    this.serviceNews.addNews(formvaleu).subscribe((res)=>{
      this.news=res
      this.router.navigate(["news"])

    })
  }
  ngOnInit(): void {
  }

}
