import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantToApprovePhaseComponent } from './applicant-to-approve-phase.component';

describe('ApplicantToApprovePhaseComponent', () => {
  let component: ApplicantToApprovePhaseComponent;
  let fixture: ComponentFixture<ApplicantToApprovePhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantToApprovePhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantToApprovePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
