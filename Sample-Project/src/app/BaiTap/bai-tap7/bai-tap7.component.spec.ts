import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap7Component } from './bai-tap7.component';

describe('BaiTap7Component', () => {
  let component: BaiTap7Component;
  let fixture: ComponentFixture<BaiTap7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
