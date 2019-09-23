import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoryPendingApprovePhasesComponent } from './convocatory-pending-approve-phases.component';

describe('ConvocatoryPendingApprovePhasesComponent', () => {
  let component: ConvocatoryPendingApprovePhasesComponent;
  let fixture: ComponentFixture<ConvocatoryPendingApprovePhasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoryPendingApprovePhasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoryPendingApprovePhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
