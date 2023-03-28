import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap16Component } from './bai-tap16.component';

describe('BaiTap16Component', () => {
  let component: BaiTap16Component;
  let fixture: ComponentFixture<BaiTap16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
