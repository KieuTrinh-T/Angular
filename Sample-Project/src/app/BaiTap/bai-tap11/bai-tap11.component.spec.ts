import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap11Component } from './bai-tap11.component';

describe('BaiTap11Component', () => {
  let component: BaiTap11Component;
  let fixture: ComponentFixture<BaiTap11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
