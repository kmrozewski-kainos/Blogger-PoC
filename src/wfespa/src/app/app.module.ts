import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AboutComponent} from "./components/about/about/about.component";
import {AddComponent} from "./components/comment/add/add.component";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommentComponent} from "./components/comment/comment/comment.component";
import {CommentsService} from "./services/comments.service";
import {HomeComponent} from "./components/home/home.component";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PostComponent} from "./components/post/post/post.component";
import {PostPreviewComponent} from "./components/post/post-preview/post-preview.component";
import {PostsService} from "./services/posts.service";
import {ReplyComponent} from "./components/comment/reply/reply.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    HomeComponent,
    PostPreviewComponent,
    PageNotFoundComponent,
    AboutComponent,
    AddComponent,
    ReplyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [CommentsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
