import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellIdComponent } from './cell-id.component';

describe('CellIdComponent', () => {
  let component: CellIdComponent;
  let fixture: ComponentFixture<CellIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
