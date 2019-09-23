import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBasicPhaseComponent } from './detailed-basic-phase.component';

describe('DetailedBasicPhaseComponent', () => {
  let component: DetailedBasicPhaseComponent;
  let fixture: ComponentFixture<DetailedBasicPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedBasicPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedBasicPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
