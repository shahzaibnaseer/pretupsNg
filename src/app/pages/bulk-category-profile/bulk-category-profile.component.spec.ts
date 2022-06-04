import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCategoryProfileComponent } from './bulk-category-profile.component';

describe('BulkCategoryProfileComponent', () => {
  let component: BulkCategoryProfileComponent;
  let fixture: ComponentFixture<BulkCategoryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCategoryProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCategoryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
