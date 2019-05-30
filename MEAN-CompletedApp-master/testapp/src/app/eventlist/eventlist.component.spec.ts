/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EventlistComponent } from './eventlist.component';

describe('Component: Eventlist', () => {
  it('should create an instance', () => {
    let component = new EventlistComponent(null);
    expect(component).toBeTruthy();
  });
});
