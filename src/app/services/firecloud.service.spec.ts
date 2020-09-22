import { TestBed } from '@angular/core/testing';

import { FirecloudService } from './firecloud.service';

describe('FirecloudService', () => {
  let service: FirecloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirecloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
