import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtworkStockComponent } from './newtwork-stock.component';

describe('NewtworkStockComponent', () => {
  let component: NewtworkStockComponent;
  let fixture: ComponentFixture<NewtworkStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtworkStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtworkStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
