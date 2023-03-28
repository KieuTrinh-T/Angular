import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap12Component } from './bai-tap12.component';

describe('BaiTap12Component', () => {
  let component: BaiTap12Component;
  let fixture: ComponentFixture<BaiTap12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
