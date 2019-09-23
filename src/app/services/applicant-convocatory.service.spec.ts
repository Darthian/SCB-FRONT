import { TestBed, inject } from '@angular/core/testing';

import { ApplicantConvocatoryService } from './applicant-convocatory.service';

describe('ApplicantConvocatoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantConvocatoryService]
    });
  });

  it('should be created', inject([ApplicantConvocatoryService], (service: ApplicantConvocatoryService) => {
    expect(service).toBeTruthy();
  }));
});
