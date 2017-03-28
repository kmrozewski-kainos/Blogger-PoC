import {Comment} from "./comment.model";

export class CommentDirectory {

    private _comment: Comment;
    private _subcomments: Array<CommentDirectory> = [];

    constructor(comment: Comment, subcomments: Array<CommentDirectory>) {
        this._comment = comment;
        this._subcomments = subcomments;
    }

    public get comment(): Comment {
        return this._comment;
    }

    public set comment(value: Comment) {
        this._comment = value;
    }

    public get subcomments(): Array<CommentDirectory> {
        return this._subcomments;
    }

    public set subcomments(value: Array<CommentDirectory>) {
        this._subcomments = value;
    }
}
