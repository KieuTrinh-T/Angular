import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap6Component } from './bai-tap6.component';

describe('BaiTap6Component', () => {
  let component: BaiTap6Component;
  let fixture: ComponentFixture<BaiTap6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
