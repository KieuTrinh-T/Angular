import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap10Component } from './bai-tap10.component';

describe('BaiTap10Component', () => {
  let component: BaiTap10Component;
  let fixture: ComponentFixture<BaiTap10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
