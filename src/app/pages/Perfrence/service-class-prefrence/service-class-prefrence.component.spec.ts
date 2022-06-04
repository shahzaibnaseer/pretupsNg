import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCLassPrefrenceComponent } from './service-class-prefrence.component';

describe('ServiceCLassPrefrenceComponent', () => {
  let component: ServiceCLassPrefrenceComponent;
  let fixture: ComponentFixture<ServiceCLassPrefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCLassPrefrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCLassPrefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
