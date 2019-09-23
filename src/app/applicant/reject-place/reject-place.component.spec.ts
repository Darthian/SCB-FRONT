import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPlaceComponent } from './reject-place.component';

describe('RejectPlaceComponent', () => {
  let component: RejectPlaceComponent;
  let fixture: ComponentFixture<RejectPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
