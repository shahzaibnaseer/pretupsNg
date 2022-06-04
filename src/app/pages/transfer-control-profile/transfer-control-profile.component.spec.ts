import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferControlProfileComponent } from './transfer-control-profile.component';

describe('TransferControlProfileComponent', () => {
  let component: TransferControlProfileComponent;
  let fixture: ComponentFixture<TransferControlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferControlProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferControlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
