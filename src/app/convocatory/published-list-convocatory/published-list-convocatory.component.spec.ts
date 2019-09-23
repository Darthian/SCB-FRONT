import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedListConvocatoryComponent } from './published-list-convocatory.component';

describe('PublishedListConvocatoryComponent', () => {
  let component: PublishedListConvocatoryComponent;
  let fixture: ComponentFixture<PublishedListConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedListConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedListConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
