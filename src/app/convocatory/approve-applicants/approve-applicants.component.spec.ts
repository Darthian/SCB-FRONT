import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveApplicantsComponent } from './approve-applicants.component';

describe('ApproveApplicantsComponent', () => {
  let component: ApproveApplicantsComponent;
  let fixture: ComponentFixture<ApproveApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
