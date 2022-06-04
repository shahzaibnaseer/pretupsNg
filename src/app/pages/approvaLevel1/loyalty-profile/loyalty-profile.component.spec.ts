import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProfileComponent } from './loyalty-profile.component';

describe('LoyaltyProfileComponent', () => {
  let component: LoyaltyProfileComponent;
  let fixture: ComponentFixture<LoyaltyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
