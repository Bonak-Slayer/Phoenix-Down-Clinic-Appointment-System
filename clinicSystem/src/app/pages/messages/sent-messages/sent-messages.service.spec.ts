import { TestBed } from '@angular/core/testing';

import { SentMessagesService } from './sent-messages.service';

describe('SentMessagesService', () => {
  let service: SentMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
