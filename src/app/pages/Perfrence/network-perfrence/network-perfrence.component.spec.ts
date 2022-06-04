import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPerfrenceComponent } from './network-perfrence.component';

describe('NetworkPerfrenceComponent', () => {
  let component: NetworkPerfrenceComponent;
  let fixture: ComponentFixture<NetworkPerfrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkPerfrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkPerfrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
