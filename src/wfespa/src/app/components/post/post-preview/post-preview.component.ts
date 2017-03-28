import {Component, Input, OnInit} from "@angular/core";

import {Post} from "../../../models/post.model";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html'
})
export class PostPreviewComponent implements OnInit {

  @Input('post') post: Post;

  constructor(private router: RouterModule) { }

  ngOnInit() {
  }
}
