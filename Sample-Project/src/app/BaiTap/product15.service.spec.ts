import { TestBed } from '@angular/core/testing';

import { Product15Service } from './product15.service';

describe('Product15Service', () => {
  let service: Product15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
