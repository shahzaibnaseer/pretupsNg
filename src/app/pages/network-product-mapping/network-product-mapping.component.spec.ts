import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkProductMappingComponent } from './network-product-mapping.component';

describe('NetworkProductMappingComponent', () => {
  let component: NetworkProductMappingComponent;
  let fixture: ComponentFixture<NetworkProductMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkProductMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkProductMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
