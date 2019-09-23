import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedToApplyListConvocatoryComponent } from './published-list-to-apply-convocatory.component';

describe('PublishedToApplyListConvocatoryComponent', () => {
  let component: PublishedToApplyListConvocatoryComponent;
  let fixture: ComponentFixture<PublishedToApplyListConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedToApplyListConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedToApplyListConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
