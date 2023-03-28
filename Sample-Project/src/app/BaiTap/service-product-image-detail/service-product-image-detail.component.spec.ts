import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProductImageDetailComponent } from './service-product-image-detail.component';

describe('ServiceProductImageDetailComponent', () => {
  let component: ServiceProductImageDetailComponent;
  let fixture: ComponentFixture<ServiceProductImageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProductImageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
