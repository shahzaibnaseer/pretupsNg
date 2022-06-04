import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceGroupComponent } from './manage-service-group.component';

describe('ManageServiceGroupComponent', () => {
  let component: ManageServiceGroupComponent;
  let fixture: ComponentFixture<ManageServiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageServiceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageServiceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
