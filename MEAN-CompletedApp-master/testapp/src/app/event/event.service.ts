import { Injectable } from '@angular/core';
import { IEvent } from './event';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  private _eventsUrl = 'https://ng2mean-alohacode.c9users.io/api/localevents';
  
  constructor( private _http: Http ) { }
  
  getEvents(): Observable<IEvent[]> {
    return this._http.get(this._eventsUrl)
      .map((response: Response) => <IEvent[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  } 
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
