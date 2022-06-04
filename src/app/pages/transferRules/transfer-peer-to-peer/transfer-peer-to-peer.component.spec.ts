import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPeerToPeerComponent } from './transfer-peer-to-peer.component';

describe('TransferPeerToPeerComponent', () => {
  let component: TransferPeerToPeerComponent;
  let fixture: ComponentFixture<TransferPeerToPeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferPeerToPeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPeerToPeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
