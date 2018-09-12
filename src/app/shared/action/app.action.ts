import {UserResponse as Response} from "../../model/LoginResponse";

export class SetUserData {
  static readonly type = '[app] set userData';

  constructor(public payload: Response) {
  }
}


export class GetUserData {
  static readonly type = '[app] get userData';

  constructor() {
  }
}
