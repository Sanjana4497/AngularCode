import { TestBed } from '@angular/core/testing';

import { CategoryappserviceService } from './categoryappservice.service';

describe('CategoryappserviceService', () => {
  let service: CategoryappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
