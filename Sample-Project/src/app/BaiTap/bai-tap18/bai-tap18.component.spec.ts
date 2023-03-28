import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap18Component } from './bai-tap18.component';

describe('BaiTap18Component', () => {
  let component: BaiTap18Component;
  let fixture: ComponentFixture<BaiTap18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
