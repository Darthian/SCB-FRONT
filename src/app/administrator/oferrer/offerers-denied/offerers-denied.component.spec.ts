import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferersDeniedComponent } from './offerers-denied.component';

describe('OfferersDeniedComponent', () => {
  let component: OfferersDeniedComponent;
  let fixture: ComponentFixture<OfferersDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferersDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferersDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
