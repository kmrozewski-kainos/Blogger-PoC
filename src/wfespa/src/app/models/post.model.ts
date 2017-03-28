import {User} from "./user.model";

export class Post {
  private _id: number;
  private _title: string;
  private _timestamp: Date;
  private _content: string;
  private _author: User;

  constructor(id: number, title: string, timestamp: Date, content: string, author: User) {
    this._id = id;
    this._title = title;
    this._timestamp = timestamp;
    this._content = content;
    this._author = author;
  }

  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
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
}
