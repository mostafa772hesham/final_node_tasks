import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:News[]=[]
  constructor(private serviceNews:NewsService) { }
  getAll(){
    this.serviceNews.getNews().subscribe((res)=>{
      this.news=res
    })
  }
  deletNews(formvaleu:any){
    this.serviceNews.deleteNews(formvaleu._id).subscribe(()=>{
      let i = this.news.indexOf(formvaleu)
      this.news.splice(i,1)
    })
  }
  ngOnInit(): void {
   this.getAll()
  }

}
