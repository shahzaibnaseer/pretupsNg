import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpreatorUserComponent } from './opreator-user.component';

describe('OpreatorUserComponent', () => {
  let component: OpreatorUserComponent;
  let fixture: ComponentFixture<OpreatorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpreatorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpreatorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
