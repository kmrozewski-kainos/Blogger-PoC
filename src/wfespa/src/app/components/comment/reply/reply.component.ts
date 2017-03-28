import {Component, Input, OnInit} from "@angular/core";

import {Comment} from "../../../models/comment.model";
import {CommentDirectory} from "../../../models/comment-directory.model";
import {User} from "../../../models/user.model";
import {UserType} from "../../../models/user-type.model";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.less']
})
export class ReplyComponent implements OnInit {

  @Input() private directory: CommentDirectory;
  private submitted = false;
  private active = true;
  private isCollapsed = true;
  private content: string;

  constructor() { }

  ngOnInit() { }

  private toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.resetForm();
  }

  private addReply(content: string): void {
    const user = new User('username4227', 'username4227', new Date(), UserType.Unregistered);
    const comment = new Comment(9, 1, new Date(), content, user, 0);
    this.directory.subcomments.push(new CommentDirectory(comment, []));
  }

  private onSubmit(): void {
    this.addReply(this.content);
    this.resetForm();
    this.toggleCollapse();
  }

  private resetForm(): void {
    this.content = null;
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
