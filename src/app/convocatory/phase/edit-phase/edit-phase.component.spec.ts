import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhaseComponent } from './edit-phase.component';

describe('EditPhaseComponent', () => {
  let component: EditPhaseComponent;
  let fixture: ComponentFixture<EditPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
