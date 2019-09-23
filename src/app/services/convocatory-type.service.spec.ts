import { TestBed, inject } from '@angular/core/testing';

import { ConvocatoryTypeService } from './convocatory-type.service';

describe('ConvocatoryTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvocatoryTypeService]
    });
  });

  it('should be created', inject([ConvocatoryTypeService], (service: ConvocatoryTypeService) => {
    expect(service).toBeTruthy();
  }));
});
