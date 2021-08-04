import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from './service/authgard.service';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { EditenewsComponent } from './views/editenews/editenews.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SigninComponent } from './views/signin/signin.component';

const routes: Routes = [
  {path:"signup",component:SigninComponent},
  {path:"",component:LoginComponent},
  {path:"profile",component:ProfileComponent,canActivate:[AuthgardService]},
  {path:"addnews",component:AddnewsComponent,canActivate:[AuthgardService]},
  {path:"news",component:NewsComponent,canActivate:[AuthgardService]},
  {path:"update/:id",component:EditenewsComponent,canActivate:[AuthgardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
