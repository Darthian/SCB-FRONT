import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConvocatoryComponent } from './edit-convocatory.component';

describe('EditConvocatoryComponent', () => {
  let component: EditConvocatoryComponent;
  let fixture: ComponentFixture<EditConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
