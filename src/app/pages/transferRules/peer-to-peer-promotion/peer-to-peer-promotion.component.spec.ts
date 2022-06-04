import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerToPeerPromotionComponent } from './peer-to-peer-promotion.component';

describe('PeerToPeerPromotionComponent', () => {
  let component: PeerToPeerPromotionComponent;
  let fixture: ComponentFixture<PeerToPeerPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerToPeerPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerToPeerPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
