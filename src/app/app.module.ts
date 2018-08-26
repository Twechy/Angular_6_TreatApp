import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {AddEmpComponent} from "./component/employee/add-emp/add-emp.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TreatService} from "./service/treat-service.service";
import {MainNavComponent} from './component/main-nav/main-nav.component';
import "hammerjs";
import {FlexLayoutModule} from "@angular/flex-layout";
import {EmpTableComponent} from './component/emp-table/emp-table.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {AlertComponent} from "./shared/alert.component";
import {AlertService} from "./shared/alert.service";
import {UserService} from "./service/user.service";
import {JwtInterceptor} from "./auth/jwt.interceptor";
import {ErrorInterceptor} from "./auth/error.Interceptor";
import {routing} from "./app-modules/route";
import {AppMaterialModule} from "./app-modules/app-material.module";
import {EmpDetailComponent} from "./component/employee/emp-detail/emp-detail.component";
import {MainTreatComponent} from "./component/treatment/main-treat.component/main-treat.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserModule} from "@angular/platform-browser";
import {LayoutModule} from "@angular/cdk/layout";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    LoginComponent,
    HomeComponent,
    MainNavComponent,
    EmpTableComponent,
    EmpDetailComponent,
    AlertComponent,
    MainTreatComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    LayoutModule,
    routing
  ],
  providers: [
    TreatService,
    AuthService,
    AlertService,
    AlertComponent,
    AuthGuard,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
