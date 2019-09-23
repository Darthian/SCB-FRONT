import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBasicConvocatoryComponent } from './detail-basic-convocatory.component';

describe('DetailBasicConvocatoryComponent', () => {
  let component: DetailBasicConvocatoryComponent;
  let fixture: ComponentFixture<DetailBasicConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBasicConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBasicConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
