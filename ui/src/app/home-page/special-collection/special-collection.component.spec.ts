import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCollectionComponent } from './special-collection.component';

describe('SpecialCollectionComponent', () => {
  let component: SpecialCollectionComponent;
  let fixture: ComponentFixture<SpecialCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialCollectionComponent]
    });
    fixture = TestBed.createComponent(SpecialCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
