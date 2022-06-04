import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferChannelToChannelComponent } from './transfer-channel-to-channel.component';

describe('TransferChannelToChannelComponent', () => {
  let component: TransferChannelToChannelComponent;
  let fixture: ComponentFixture<TransferChannelToChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferChannelToChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferChannelToChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
