import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap22Component } from './bai-tap22.component';

describe('BaiTap22Component', () => {
  let component: BaiTap22Component;
  let fixture: ComponentFixture<BaiTap22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
