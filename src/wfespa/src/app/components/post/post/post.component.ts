import {Component, OnInit} from "@angular/core";

import {ActivatedRoute} from "@angular/router";
import {CommentDirectory} from "../../../models/comment-directory.model";
import {CommentsService} from "../../../services/comments.service";
import {Post} from "../../../models/post.model";
import {PostsService} from "../../../services/posts.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  private postId: number;
  private paramsSub: Subscription;
  private commentSub: Subscription;
  private post: Post;
  private directories: Array<CommentDirectory> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute
      .params
      .subscribe(params => this.postId = parseInt(params['id'], 10));
    this.commentSub = this.commentsService
      .commentChange$
      .subscribe(comment => this.onCommentAdded(comment));

    this.post = this.postsService.getById(this.postId);
    this.directories = this.commentsService.get();
    this.commentsService.sortComments(this.directories);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.commentSub.unsubscribe();
  }

  private onCommentAdded(comment): void {
    this.commentsService.sortComments(this.directories);
  }
}
