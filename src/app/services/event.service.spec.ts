import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventsService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getEvents method', () => {
    expect(service.getEvents).toBeDefined();
  });

  it('should be able to get events', () => {
    service.getEvents().subscribe((events) => {
      expect(events).toBeTruthy();
    });
  });
 
  // ... other tests or mocking api calls
});
