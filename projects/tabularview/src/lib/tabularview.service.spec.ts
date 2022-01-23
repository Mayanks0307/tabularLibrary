import { TestBed } from '@angular/core/testing';

import { TabularviewService } from './tabularview.service';

describe('TabularviewService', () => {
  let service: TabularviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabularviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
