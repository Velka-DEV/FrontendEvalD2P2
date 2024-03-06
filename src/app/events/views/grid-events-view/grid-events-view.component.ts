import { Component } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../types';

@Component({
  selector: 'app-grid-events-view',
  standalone: true,
  imports: [EventCardComponent, RouterLink, DatePipe],
  templateUrl: './grid-events-view.component.html',
})
export class GridEventsViewComponent {
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
