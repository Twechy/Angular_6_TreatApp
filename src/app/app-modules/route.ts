import {RouterModule, Routes} from '@angular/router';
import {AddEmpComponent} from "../component/employee/add-emp/add-emp.component";
import {HomeComponent} from "../component/home/home.component";
import {LoginComponent} from "../component/login/login.component";
import {EmpTableComponent} from "../component/emp-table/emp-table.component";
import {AuthGuard} from "../auth/auth.guard";
import {MainTreatComponent} from "../component/treatment/main-treat.component/main-treat.component";
import {EmpNavComponent} from "../component/employee/emp-nav/emp-nav.component";
import {EmpDetailComponent} from "../component/employee/emp-detail/emp-detail.component";


const appRoutes: Routes = [

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  //treatments
  {path: 'mainTreat', component: MainTreatComponent},
  //employee
  {
    path: 'mainEmp', component: EmpNavComponent,
    children: [
      {path: 'empTable', component: EmpTableComponent,},
      {path: 'addEmp', component: AddEmpComponent},
      {path: 'empDetail/:id', component: EmpDetailComponent, pathMatch: 'full'}
    ]
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
