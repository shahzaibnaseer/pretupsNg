import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationReassociationComponent } from './association-reassociation.component';

describe('AssociationReassociationComponent', () => {
  let component: AssociationReassociationComponent;
  let fixture: ComponentFixture<AssociationReassociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationReassociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationReassociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
