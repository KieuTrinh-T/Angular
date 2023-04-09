import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap66Component } from './bai-tap66.component';

describe('BaiTap66Component', () => {
  let component: BaiTap66Component;
  let fixture: ComponentFixture<BaiTap66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap66Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
