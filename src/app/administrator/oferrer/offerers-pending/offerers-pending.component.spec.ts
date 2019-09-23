import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferersPendingComponent } from './offerers-pending.component';

describe('OfferersPendingComponent', () => {
  let component: OfferersPendingComponent;
  let fixture: ComponentFixture<OfferersPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferersPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferersPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
