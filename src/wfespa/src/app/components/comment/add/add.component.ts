import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Comment} from "../../../models/comment.model";
import {CommentDirectory} from "../../../models/comment-directory.model";
import {CommentsService} from "../../../services/comments.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "../../../models/user.model";
import {UserType} from "../../../models/user-type.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  public submitted = false;
  public active = true;

  private commentSub: Subscription;
  private isCollapsed: boolean;

  private commentForm: FormGroup;
  private commentFormErrors = {
    'commentContent': ''
  };
  private validationMessages = {
    'commentContent': {
      'required': 'This field is required.',
      'minlength': 'Comment have to be at least 1 character long.',
      'maxlength': 'Comment cannot be more than 1000 characters long.'
    }
  };

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.commentSub = this.commentsService
      .commentChange$
      .subscribe(comment => this.onCommentAdded());
    this.buildForm();
  }

  ngOnDestroy() {
    this.commentSub.unsubscribe();
  }

  public toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.resetForm();
  }

  private buildForm(): void {
    this.commentForm = this.formBuilder.group({
      'commentContent': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
      this.onValueChanged(); // (re)set validation messages now
  }

  private onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;

    // tslint:disable-next-line:forin
    for (const field in this.commentFormErrors) {
      // clear previous error message (if any)
      this.commentFormErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.commentFormErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  private addComment(content: string) {
    const user = new User('rumble_the_jungle', 'rumble_the_jungle', new Date(), UserType.Registered); // remove after login func
    const comment = new Comment(5, 1, new Date(), content, user, 0);
    this.commentsService.add(new CommentDirectory(comment, []));
  }

  private onCommentAdded(): void {
    this.isCollapsed = false;
  }

  private resetForm() {
    this.buildForm();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  private onSubmit() {
    this.submitted = true;
    this.addComment(this.commentForm.value.commentContent);
    this.resetForm();
  }
}
