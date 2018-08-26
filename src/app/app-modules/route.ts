import {RouterModule, Routes} from '@angular/router';
import {AddEmpComponent} from "../component/employee/add-emp/add-emp.component";
import {HomeComponent} from "../component/home/home.component";
import {LoginComponent} from "../component/login/login.component";
import {EmpTableComponent} from "../component/emp-table/emp-table.component";
import {AuthGuard} from "../auth/auth.guard";
import {MainTreatComponent} from "../component/treatment/main-treat.component/main-treat.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'emp', component: EmpTableComponent},
  {path: 'employee', component: AddEmpComponent},
  {path: 'mainTreat', component: MainTreatComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
