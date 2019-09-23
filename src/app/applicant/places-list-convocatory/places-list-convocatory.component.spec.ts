import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesListConvocatoryComponent } from './places-list-convocatory.component';

describe('PlacesListConvocatoryComponent', () => {
  let component: PlacesListConvocatoryComponent;
  let fixture: ComponentFixture<PlacesListConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesListConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesListConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
