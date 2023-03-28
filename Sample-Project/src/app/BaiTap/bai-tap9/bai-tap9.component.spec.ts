import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap9Component } from './bai-tap9.component';

describe('BaiTap9Component', () => {
  let component: BaiTap9Component;
  let fixture: ComponentFixture<BaiTap9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
