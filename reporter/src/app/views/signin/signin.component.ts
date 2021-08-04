import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
reporter:any
token:any
invaldEmail:boolean=false
  constructor(private serviceauth:AuthService,private router:Router) { }
 
  signUp(formvaleu:any){
    this.serviceauth.signUp(formvaleu).subscribe((res)=>{
      this.reporter=res
      this.token=this.reporter.token
      localStorage.setItem("token",this.token)
      this.router.navigate(["/profile"])
    },(httpError)=>{
      console.log(httpError)
      if(httpError.error.text){
        this.invaldEmail=true
      }
    })
  }

  ngOnInit(): void {
  }

}
