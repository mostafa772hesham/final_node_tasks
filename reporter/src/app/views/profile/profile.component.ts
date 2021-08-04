import { Component, OnInit } from '@angular/core';
import { Reporter } from 'src/app/interface/reporter';
import { ReportsService } from 'src/app/service/reports.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reporter:Reporter={}
  constructor(private reporterservice:ReportsService) { }
  getprofile(){
    this.reporterservice.getprofile().subscribe((res)=>{
      console.log(res)
      this.reporter=res
    })
  }
  ngOnInit(): void {
   this.getprofile()
  }

}
