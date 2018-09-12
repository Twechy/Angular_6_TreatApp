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
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {EmpTableComponent} from './component/emp-table/emp-table.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
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
import {EmpNavComponent} from './component/employee/emp-nav/emp-nav.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";
import {AddEmpDialogComponent} from './component/employee/add-emp-dialog/add-emp-dialog.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {AppState} from "./shared/state/app.state";
import {RouterState} from "./shared/state/router.state";
import {EmployeeState} from "./shared/state/employee.state";
import {SearchEmpComponent} from './component/employee/search-emp/search-emp.component';
import {AddTreatComponent} from './component/treatment/add-treat/add-treat.component';
import {EmpTreatValidationComponent} from './component/treatment/emp-treat-validation/emp-treat-validation.component';
import {SharedEmpDetailComponent} from './shared/shared-emp-detail/shared-emp-detail.component';
import {AddRelDialogComponent} from './shared/shared-rel-detail/shared-rel-detail.component';
import {NgHttpLoaderModule} from "ng-http-loader";
import {HTTPListener, HTTPStatus} from './auth/http.interceptor';
import {TreatPriceValidationComponent} from './component/employee/treat-price-validation/treat-price-validation.component';
import {TreatPriceTableComponent} from './component/treatment/treat-price-table/treat-price-table.component';

const RxJS_Services = [HTTPListener, HTTPStatus];


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    LoginComponent,
    HomeComponent,
    MainNavComponent,
    EmpTableComponent,
    EmpDetailComponent,
    MainTreatComponent,
    EmpNavComponent,
    AddEmpDialogComponent,
    SearchEmpComponent,
    AddTreatComponent,
    EmpTreatValidationComponent,
    AddRelDialogComponent,
    SharedEmpDetailComponent,
    TreatPriceValidationComponent,
    TreatPriceTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    FlexModule,
    BrowserModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    LayoutModule,
    routing,
    NgxsModule.forRoot([
      RouterState,
      AppState,
      EmployeeState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'appUser.user.accessToken'
    })
  ],
  entryComponents: [
    AddEmpDialogComponent,
    AddRelDialogComponent
  ],
  providers: [
    TreatService,
    AuthService,
    AuthGuard,
    UserService,
    RxJS_Services,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
