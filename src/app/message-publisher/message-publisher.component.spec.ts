import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePublisherComponent } from './message-publisher.component';

describe('MessagePublisherComponent', () => {
  let component: MessagePublisherComponent;
  let fixture: ComponentFixture<MessagePublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
