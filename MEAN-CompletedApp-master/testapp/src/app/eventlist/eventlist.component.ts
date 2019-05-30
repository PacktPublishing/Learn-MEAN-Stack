import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event/event';
import { EventService } from '../event/event.service';

@Component({
  moduleId: module.id,
  selector: 'app-eventlist',
  templateUrl: 'eventlist.component.html',
  styleUrls: ['eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  
  events: IEvent[];
  errorMessage: string;

  constructor( private _eventService: EventService ) { }

  ngOnInit(): void {
    this._eventService.getEvents()
      .subscribe(
          events => this.events = events,
          error => this.errorMessage = <any>error);
  }

}
