import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhaseComponent } from './update-phase.component';

describe('UpdatePhaseComponent', () => {
  let component: UpdatePhaseComponent;
  let fixture: ComponentFixture<UpdatePhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
