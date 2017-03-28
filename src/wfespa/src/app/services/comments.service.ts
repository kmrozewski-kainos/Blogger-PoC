import {Observable, ReplaySubject} from "rxjs/rx";

import {Comment} from "../models/comment.model";
import {CommentDirectory} from "../models/comment-directory.model";
import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {UserType} from "../models/user-type.model";

@Injectable()
export class CommentsService {

  private comments: CommentDirectory[] = this.genComments();

  private commentSubject = new ReplaySubject<CommentDirectory>(1);
  public commentChange$: Observable<CommentDirectory> = this.commentSubject.asObservable();

  constructor() { }

  public get(): CommentDirectory[] {
    return this.comments;
  }

  public getByCommentId(id: number): CommentDirectory {
    return this.comments.filter(commentDirectory => commentDirectory.comment.commentId === id)[0];
  }

  public getByPostId(id: number): CommentDirectory[] {
    return this.comments.filter(commentDirectory => commentDirectory.comment.postId === id);
  }

  public add(comment: CommentDirectory) {
    this.comments.push(comment);
    this.commentSubject.next(comment);
  }

  public sortComments(elements: Array<CommentDirectory>) {
    return this.sortElements(elements, (e1: CommentDirectory, e2: CommentDirectory) => e2.comment.score - e1.comment.score);
  }

  private sortElements<T>(elements: T[], comparator: (el1: T, el2: T) => number): T[] {
    return elements.sort((e1, e2) => comparator(e1, e2));
  }

  private genComments(): CommentDirectory[] {
    const ts = new Date();
    const u1 = new User('m.hiscock', 'Mike Hiscock', new Date(), UserType.Registered);
    const u2 = new User('p.mccrevis', 'Phillip McCrevis', new Date(), UserType.Unregistered);
    const u3 = new User('trevor2137', 'Trevor Phillips', new Date(), UserType.Registered);
    const c1 = new Comment(1, 1, ts, `
      I competed in the ncaa national table tennis championship tournament after learning how to play in prison.
      Edit: to answer some of your questions just went to a tech school in Minnesota. 
      The tournament has no divisions like most of NCAA (not big enough sport). 
      I went to the third round and got eliminated. 
      I won first two rounds against someone from Harvard, and UCLA. 
      I am a tall white guy, got lot of Forrest Gump jokes from my friends.`, u1, 5);
    const c2 = new Comment(2, 1, ts, `
      I have been rescued from a flood by black hawk helicopter.`, u1, 0);
    const c3 = new Comment(3, 1, ts, `
      I can look at just about any roller coaster and tell you which company manufactured it. 
      It's actually pretty easy once you learn track types!`, u2, -2);
    const c4 = new Comment(4, 1, ts, `
      Memorized 144 digits of pi in Grade 8. Did it for 1 bonus mark per 5 digits`, u3, 10);


    const cd1 = new CommentDirectory(c1, [new CommentDirectory(c2, []), new CommentDirectory(c3, []), new CommentDirectory(c4, [])]);
    const cd2 = new CommentDirectory(c4, [cd1, new CommentDirectory(c2, [])]);

    return [cd1, cd2];
  }
}
