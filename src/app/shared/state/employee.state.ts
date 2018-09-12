import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IEmpViewModel} from "../../model/employee.model";
import {TreatService} from "../../service/treat-service.service";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

export class EmpStateModel {
  employee: IEmpViewModel[];
}

export class AddEmp {
  static readonly type = '[emp] set employee';

  constructor(public payload: IEmpViewModel) {
  }
}

export class GetEmp {
  static readonly type = '[emp] get employee';

  constructor(public payload: number) {
  }
}

export class GetEmpList {
  static readonly type = '[emp] get employeeList';
}

export class SetEmp {
  static readonly type = '[emp] set employee';

  constructor(public payload: IEmpViewModel) {
  }
}

@State<EmpStateModel>({
  name: 'emp',
  defaults: {
    employee: [],
  }
})
export class EmployeeState {

  constructor(private service: TreatService,
              private http: HttpClient) {
  }

  @Selector()
  static getEmployees(state: EmpStateModel) {
    return state.employee;
  }

  @Action(GetEmpList)
  setUserData(ctx: StateContext<EmpStateModel>) {
    return this.http.get('api/employee/getEmp').pipe(
      map((value: IEmpViewModel[]) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          employee: value
        })
      })
    )
  }

}
