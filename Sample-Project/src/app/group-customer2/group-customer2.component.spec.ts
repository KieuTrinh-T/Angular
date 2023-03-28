import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCustomer2Component } from './group-customer2.component';

describe('GroupCustomer2Component', () => {
  let component: GroupCustomer2Component;
  let fixture: ComponentFixture<GroupCustomer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCustomer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCustomer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
