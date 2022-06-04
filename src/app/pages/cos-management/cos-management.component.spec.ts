import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosManagementComponent } from './cos-management.component';

describe('CosManagementComponent', () => {
  let component: CosManagementComponent;
  let fixture: ComponentFixture<CosManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
