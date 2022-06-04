import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterFaceMappingComponent } from './inter-face-mapping.component';

describe('InterFaceMappingComponent', () => {
  let component: InterFaceMappingComponent;
  let fixture: ComponentFixture<InterFaceMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterFaceMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterFaceMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
