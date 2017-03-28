import {Component, Input, OnInit} from "@angular/core";
import {CommentDirectory} from "../../../models/comment-directory.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

  @Input() directory: CommentDirectory;
  private baseScore: number;
  private isCollapsedReply = true;

  constructor() {}

  ngOnInit() {
    this.baseScore = this.directory.comment.score;
    Object.freeze(this.baseScore);
  }

  private changeScore(inc: number): void {
    if (Math.abs(this.directory.comment.score - this.baseScore + inc) <= 1) {
      this.directory.comment.score += inc;
    }
  }

  private isBelow() {
    return this.directory.comment.score < 0;
  }

  private isAbove() {
    return this.directory.comment.score > 0;
  }
}
