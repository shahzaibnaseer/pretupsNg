import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferChanneltoSubscriberComponent } from './transfer-channelto-subscriber.component';

describe('TransferChanneltoSubscriberComponent', () => {
  let component: TransferChanneltoSubscriberComponent;
  let fixture: ComponentFixture<TransferChanneltoSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferChanneltoSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferChanneltoSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
