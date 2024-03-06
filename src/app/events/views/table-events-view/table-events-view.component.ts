import { Component } from '@angular/core';
import { Event } from '../../../types';
import { EventService } from '../../../services/event.service';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-events-view',
  standalone: true,
  imports: [EventCardComponent, RouterLink, DatePipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './table-events-view.component.html',
})
export class ListEventsViewComponent {
  events: Event[] = [];
  dateControl = new FormControl(null);

  constructor(private _eventService: EventService) {
    this.loadEvents();
  }

  loadEvents() {
    console.log(this.dateControl.value);

    this._eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  deleteEvent(id: string) {
    console.log('deleteEvent', id);
    this.events = this.events.filter((event) => event.id !== id);
  }
}
