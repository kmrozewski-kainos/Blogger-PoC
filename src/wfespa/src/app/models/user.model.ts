import {UserType} from "./user-type.model";

export class User {
  private _name: string;
  private _displayName: string;
  private _registered: Date;
  private _type: UserType;

  constructor(name: string, displayName: string, registered: Date, type: UserType) {
    this._name = name;
    this._displayName = displayName;
    this._registered = registered;
    this._type = type;
  }

  public get name(): string {
    return this._name;
  }

  public get displayName(): string {
    return this._displayName;
  }

  public get registered(): Date {
    return this._registered;
  }

  public get type(): UserType {
    return this._type;
  }
}
