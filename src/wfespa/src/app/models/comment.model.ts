import {User} from "./user.model";

export class Comment {
  private _commentId: number;
  private _postId: number;
  private _timestamp: Date;
  private _content: string;
  private _author: User;
  private _score: number;

  constructor(commentId: number, postId: number, timestamp: Date, content: string, author: User, score: number) {
    this._commentId = commentId;
    this._postId = postId;
    this._timestamp = timestamp;
    this._content = content;
    this._author = author;
    this._score = score;
  }

  public get commentId(): number {
    return this._commentId;
  }

  public get postId(): number {
    return this._postId;
  }

  public get timestamp(): Date {
    return this._timestamp;
  }

  public get content(): string {
    return this._content;
  }

  public get author(): User {
    return this._author;
  }

  public get score(): number {
    return this._score;
  }

  public set score(value: number) {
    this._score = value;
  }
}
