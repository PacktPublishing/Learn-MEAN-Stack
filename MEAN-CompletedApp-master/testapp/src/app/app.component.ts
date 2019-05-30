import { Component } from '@angular/core';
import { EventService } from './event/event.service';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';  // Load all features
import { EventlistComponent } from './eventlist/eventlist.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [EventlistComponent],
  providers: [EventService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'Our little testapp works!';
}
