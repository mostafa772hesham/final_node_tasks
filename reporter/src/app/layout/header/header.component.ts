import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AuthService) { }
  logout(){
   this.service.logout().subscribe(()=>{
     localStorage.removeItem("token")
   })
  }
  logoutall(){
    this.service.logoutall().subscribe(()=>{
      
    })
  }
  
  ngOnInit(): void {
  }

}
