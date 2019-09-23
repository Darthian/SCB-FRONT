import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedConvocatoryComponent } from './published-convocatory.component';

describe('PublishedConvocatoryComponent', () => {
  let component: PublishedConvocatoryComponent;
  let fixture: ComponentFixture<PublishedConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
