import {Component, OnInit} from "@angular/core";

import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private posts;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.get();
  }
}
