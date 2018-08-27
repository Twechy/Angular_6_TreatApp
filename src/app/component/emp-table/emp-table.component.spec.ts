
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTableComponent } from './emp-table.component';

describe('EmpTableComponent', () => {
  let component: EmpTableComponent;
  let fixture: ComponentFixture<EmpTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
