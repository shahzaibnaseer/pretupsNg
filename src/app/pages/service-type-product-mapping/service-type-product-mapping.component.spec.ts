import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeProductMappingComponent } from './service-type-product-mapping.component';

describe('ServiceTypeProductMappingComponent', () => {
  let component: ServiceTypeProductMappingComponent;
  let fixture: ComponentFixture<ServiceTypeProductMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeProductMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeProductMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
