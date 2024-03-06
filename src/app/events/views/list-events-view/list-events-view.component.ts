import { Component } from '@angular/core';
import { Event } from '../../../types';
import { EventService } from '../../../services/event.service';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-events-view',
  standalone: true,
  imports: [EventCardComponent, RouterLink],
  templateUrl: './list-events-view.component.html',
})
export class ListEventsViewComponent {
  events: Event[] = [];

  constructor(private _eventService: EventService) {
    this._eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  deleteEvent(id: string) {
    console.log('deleteEvent', id);
    this.events = this.events.filter((event) => event.id !== id);
  }
}
