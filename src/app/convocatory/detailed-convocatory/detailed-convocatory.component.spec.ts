import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedConvocatoryComponent } from './detailed-convocatory.component';

describe('DetailedConvocatoryComponent', () => {
  let component: DetailedConvocatoryComponent;
  let fixture: ComponentFixture<DetailedConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
