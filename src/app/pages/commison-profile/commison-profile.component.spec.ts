import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisonProfileComponent } from './commison-profile.component';

describe('CommisonProfileComponent', () => {
  let component: CommisonProfileComponent;
  let fixture: ComponentFixture<CommisonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommisonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
