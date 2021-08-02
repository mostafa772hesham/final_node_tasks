import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { PostsComponent } from './views/posts/posts.component';
import { EditpostComponent } from './views/editpost/editpost.component';
import { PostService } from './servies/post.service';
import { TestComponent } from './views/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    EditpostComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
