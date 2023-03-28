import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap13Component } from './bai-tap13.component';

describe('BaiTap13Component', () => {
  let component: BaiTap13Component;
  let fixture: ComponentFixture<BaiTap13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
