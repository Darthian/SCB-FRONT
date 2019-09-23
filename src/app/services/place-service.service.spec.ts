import { TestBed, inject } from '@angular/core/testing';

import { PlaceServiceService } from './place-service.service';

describe('PlaceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceServiceService]
    });
  });

  it('should be created', inject([PlaceServiceService], (service: PlaceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
