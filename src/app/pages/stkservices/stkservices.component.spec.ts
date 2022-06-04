import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STKServicesComponent } from './stkservices.component';

describe('STKServicesComponent', () => {
  let component: STKServicesComponent;
  let fixture: ComponentFixture<STKServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STKServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STKServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
