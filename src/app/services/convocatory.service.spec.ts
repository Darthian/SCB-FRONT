import { TestBed, inject } from '@angular/core/testing';

import { ConvocatoryService } from './convocatory.service';

describe('ConvocatoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvocatoryService]
    });
  });

  it('should be created', inject([ConvocatoryService], (service: ConvocatoryService) => {
    expect(service).toBeTruthy();
  }));
});
