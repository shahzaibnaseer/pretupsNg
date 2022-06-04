import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPrefrenceComponent } from './control-prefrence.component';

describe('ControlPrefrenceComponent', () => {
  let component: ControlPrefrenceComponent;
  let fixture: ComponentFixture<ControlPrefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPrefrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPrefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
