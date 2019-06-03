import { TestBed } from '@angular/core/testing';

import { IngestionUploadService } from './ingestion-upload.service';

describe('IngestionUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngestionUploadService = TestBed.get(IngestionUploadService);
    expect(service).toBeTruthy();
  });
});
