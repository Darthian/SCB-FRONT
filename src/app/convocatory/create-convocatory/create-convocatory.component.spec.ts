import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConvocatoryComponent } from './create-convocatory.component';

describe('CreateConvocatoryComponent', () => {
  let component: CreateConvocatoryComponent;
  let fixture: ComponentFixture<CreateConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
