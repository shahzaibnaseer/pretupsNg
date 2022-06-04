import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkStockLevel2Component } from './network-stock-level2.component';

describe('NetworkStockLevel2Component', () => {
  let component: NetworkStockLevel2Component;
  let fixture: ComponentFixture<NetworkStockLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkStockLevel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkStockLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
