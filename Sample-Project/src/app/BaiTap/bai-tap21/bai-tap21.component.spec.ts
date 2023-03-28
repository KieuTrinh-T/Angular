import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap21Component } from './bai-tap21.component';

describe('BaiTap21Component', () => {
  let component: BaiTap21Component;
  let fixture: ComponentFixture<BaiTap21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
