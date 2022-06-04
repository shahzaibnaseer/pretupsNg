import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateStockComponent } from './initiate-stock.component';

describe('InitiateStockComponent', () => {
  let component: InitiateStockComponent;
  let fixture: ComponentFixture<InitiateStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
