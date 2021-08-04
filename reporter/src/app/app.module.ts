import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';
import { AuthService } from './service/auth.service';
import { NewsService } from './service/news.service';
import { ReportsService } from './service/reports.service';
import { ProfileComponent } from './views/profile/profile.component';
import { NewsComponent } from './views/news/news.component';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { EditenewsComponent } from './views/editenews/editenews.component';
import { TokenIntercetorService } from './service/token-intercetor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    NewsComponent,
    AddnewsComponent,
    EditenewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,NewsService,ReportsService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercetorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
