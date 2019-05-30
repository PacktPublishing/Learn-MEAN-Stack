/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EventService } from './event.service';

describe('Service: Event', () => {
  beforeEach(() => {
    addProviders([EventService]);
  });

  it('should ...',
    inject([EventService],
      (service: EventService) => {
        expect(service).toBeTruthy();
      }));
});
