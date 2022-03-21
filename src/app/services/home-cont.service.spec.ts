import { TestBed } from '@angular/core/testing';

import { HomeContService } from './home-cont.service';

describe('HomeContService', () => {
  let service: HomeContService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeContService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
