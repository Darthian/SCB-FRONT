import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribedListConvocatoryComponent } from './inscribed-list-convocatory.component';

describe('InscribedListConvocatoryComponent', () => {
  let component: InscribedListConvocatoryComponent;
  let fixture: ComponentFixture<InscribedListConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribedListConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribedListConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
