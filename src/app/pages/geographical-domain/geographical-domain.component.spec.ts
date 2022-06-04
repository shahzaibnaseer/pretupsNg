import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalDomainComponent } from './geographical-domain.component';

describe('GeographicalDomainComponent', () => {
  let component: GeographicalDomainComponent;
  let fixture: ComponentFixture<GeographicalDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicalDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicalDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
