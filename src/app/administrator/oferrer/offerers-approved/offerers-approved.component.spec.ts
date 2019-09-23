import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferersApprovedComponent } from './offerers-approved.component';

describe('OfferersApprovedComponent', () => {
  let component: OfferersApprovedComponent;
  let fixture: ComponentFixture<OfferersApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferersApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferersApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
