import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSideMenuComponent } from './management-side-menu.component';

describe('ManagementSideMenuComponent', () => {
  let component: ManagementSideMenuComponent;
  let fixture: ComponentFixture<ManagementSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementSideMenuComponent]
    });
    fixture = TestBed.createComponent(ManagementSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
