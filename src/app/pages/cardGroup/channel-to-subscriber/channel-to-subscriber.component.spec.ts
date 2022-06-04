import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelToSubscriberComponent } from './channel-to-subscriber.component';

describe('ChannelToSubscriberComponent', () => {
  let component: ChannelToSubscriberComponent;
  let fixture: ComponentFixture<ChannelToSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelToSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelToSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
