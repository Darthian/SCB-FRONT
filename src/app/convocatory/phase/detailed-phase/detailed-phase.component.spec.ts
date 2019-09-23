import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPhaseComponent } from './detailed-phase.component';

describe('DetailedPhaseComponent', () => {
  let component: DetailedPhaseComponent;
  let fixture: ComponentFixture<DetailedPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
