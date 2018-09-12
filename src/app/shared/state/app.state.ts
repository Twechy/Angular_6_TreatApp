import {Action, Selector, State, StateContext} from "@ngxs/store";
import {UserResponse as Response} from "../../model/LoginResponse";
import {GetUserData, SetUserData} from "../action/app.action";

export class AppStateModel {
  user: Response;
}

@State<AppStateModel>({
  name: 'appUser',
  defaults: {
    user: null,
  }
})
export class AppState {

  @Selector()
  static GetUser(state: AppStateModel) {
    return state.user;
  }

  @Action(SetUserData)
  setUserData({patchState, getState}: StateContext<AppStateModel>, {payload}: SetUserData) {
    patchState({
      user: {
        userName: payload.userName,
        email: payload.email,
        accessToken: payload.accessToken,
        providerName: payload.providerName,
        id: payload.id
      }
    });
  }


  @Action(GetUserData)
  getUserData({patchState, getState}: StateContext<AppStateModel>) {
    const user = getState().user;
    console.log('GetUserData: ', user);
    patchState({
      user: {
        id: user.id,
        providerName: user.providerName,
        accessToken: user.accessToken,
        userName: user.userName,
        email: user.email
      }
    })
  }
}
