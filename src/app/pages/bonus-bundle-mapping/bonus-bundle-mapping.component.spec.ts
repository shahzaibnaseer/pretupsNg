import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusBundleMappingComponent } from './bonus-bundle-mapping.component';

describe('BonusBundleMappingComponent', () => {
  let component: BonusBundleMappingComponent;
  let fixture: ComponentFixture<BonusBundleMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusBundleMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusBundleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
