import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingListApprovePhasesConvocatoryComponent } from './pending-list-approve-phases-convocatory.component';

describe('PendingListApprovePhasesConvocatoryComponent', () => {
  let component: PendingListApprovePhasesConvocatoryComponent;
  let fixture: ComponentFixture<PendingListApprovePhasesConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingListApprovePhasesConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingListApprovePhasesConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
