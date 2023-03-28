import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai15Component } from './bai15.component';

describe('Bai15Component', () => {
  let component: Bai15Component;
  let fixture: ComponentFixture<Bai15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
