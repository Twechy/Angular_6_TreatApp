import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {UserResponse as Response} from "./model/LoginResponse";
import {GetUserData, SetUserData} from "./shared/action/app.action";
import {GetEmpList} from "./shared/state/employee.state";
import {HTTPStatus} from "./auth/http.interceptor";
import {SpinnerVisibilityService} from "ng-http-loader";
import {Observable} from "rxjs";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  @Select() appUser$;
  HTTPActivity: boolean = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store,
              private httpStatus: HTTPStatus,
              private authService: AuthService,
              private spinner: SpinnerVisibilityService) {

    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.loadUserDateToStore();

    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {

        if (this.HTTPActivity == true) this.spinner.show();
        this.HTTPActivity = status;
        if (this.HTTPActivity == true) this.spinner.hide();
      });

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {

        if (this.HTTPActivity == true) this.spinner.show();
        this.HTTPActivity = status;
        if (this.HTTPActivity == true) this.spinner.hide();
      });


    this.loadUserDateToStore();
  }

  async loadEmployee() {
    await this.store.dispatch(new GetEmpList())
  }

  async loadUserDataFromLocal(user) {
    await this.store.dispatch([
      new SetUserData({
        email: user.email,
        userName: user.userName,
        accessToken: user.accessToken,
        providerName: user.providerName,
        id: user.id
      }), new GetUserData()
    ])
  }

  private loadUserDateToStore() {
    let item = localStorage.getItem('currentUser');
    let fieldValues = JSON.parse(item);
    // @ts-ignore
    const user: Response = {
      email: fieldValues.email, userName: fieldValues.userName,
      accessToken: fieldValues.accessToken
    };
    this.loadUserDataFromLocal(user).catch(reason => console.log(reason));
    this.loadEmployee().catch(reason => console.log(reason));
  }


}
