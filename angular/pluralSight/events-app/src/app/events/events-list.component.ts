import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail 
            #thumbnail
            (eventClick)="handleEventClicked($event)" 
            [event]="event">
          </event-thumbnail>
        </div>
      </div>
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
  `,
  styles: [`
    .thumbnail {min-height: 210px;}
  `]
})
export class EventsListComponent implements OnInit{
  events:any[]

  constructor(private eventService: EventService) {
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('received: ', data)
  }
}