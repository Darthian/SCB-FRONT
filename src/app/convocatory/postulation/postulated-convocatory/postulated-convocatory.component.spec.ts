import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulatedConvocatoryComponent } from './postulated-convocatory.component';

describe('PostulatedConvocatoryComponent', () => {
  let component: PostulatedConvocatoryComponent;
  let fixture: ComponentFixture<PostulatedConvocatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulatedConvocatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulatedConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
