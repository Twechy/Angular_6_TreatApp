export interface Dep {
  id: number;
  depName: string;
}

export interface EmpLimit {
  id: number;
  familyStatus: string;
  empLimit: number;

}

export interface RelativeList {
  id: number;
  employeeId: number;
  name: string;
  status: string;
}

export interface IEmpViewModel {
  id: number;
  indexId: number;
  socialNumber: number;
  name: string;
  phone: string;
  dep: Dep;
  empLimit: EmpLimit;
  bankName?: any;
  accountNum?: any;
  relativeList: RelativeList[];
}
