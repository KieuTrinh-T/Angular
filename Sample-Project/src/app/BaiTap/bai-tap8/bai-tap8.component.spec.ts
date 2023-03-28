import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap8Component } from './bai-tap8.component';

describe('BaiTap8Component', () => {
  let component: BaiTap8Component;
  let fixture: ComponentFixture<BaiTap8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
