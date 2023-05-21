import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap67Component } from './bai-tap67.component';

describe('BaiTap67Component', () => {
  let component: BaiTap67Component;
  let fixture: ComponentFixture<BaiTap67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap67Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
