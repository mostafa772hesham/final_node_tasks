import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reporter:any
  token:any
  invalidlogin:boolean=false
  constructor(private serviceauth:AuthService, private router:Router) { }
  login(formvaleu:any){
    this.serviceauth.login(formvaleu).subscribe((res)=>{
      this.reporter=res
      this.token=this.reporter.token
      localStorage.setItem("token",this.token)
      this.router.navigate(["/profile"])
    },(httpError)=>{
      console.log(httpError)
     this.invalidlogin=true
    })
  }
  ngOnInit(): void {
  }

}
