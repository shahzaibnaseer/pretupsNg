import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferoperatorToChannelComponent } from './transferoperator-to-channel.component';

describe('TransferoperatorToChannelComponent', () => {
  let component: TransferoperatorToChannelComponent;
  let fixture: ComponentFixture<TransferoperatorToChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferoperatorToChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferoperatorToChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
