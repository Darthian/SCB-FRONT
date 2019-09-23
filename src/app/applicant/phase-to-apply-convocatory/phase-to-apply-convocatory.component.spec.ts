import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseToApplyConvocatoryComponent } from './phase-to-apply-convocatory.component';

describe('PhaseToApplyConvocatoryComponent', () => {
  let component: PhaseToApplyConvocatoryComponent;
  let fixture: ComponentFixture<PhaseToApplyConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseToApplyConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseToApplyConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
