import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyAdministrationComponent } from './loyalty-administration.component';

describe('LoyaltyAdministrationComponent', () => {
  let component: LoyaltyAdministrationComponent;
  let fixture: ComponentFixture<LoyaltyAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
