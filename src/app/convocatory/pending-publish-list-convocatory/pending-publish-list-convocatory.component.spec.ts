import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPublishListConvocatoryComponent } from './pending-publish-list-convocatory.component';

describe('PendingPublishListConvocatoryComponent', () => {
  let component: PendingPublishListConvocatoryComponent;
  let fixture: ComponentFixture<PendingPublishListConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPublishListConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPublishListConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
