import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../types';
import { RouterLink } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event: Event | undefined;
  @Output() eventDeleted = new EventEmitter<string>();

  constructor(private _eventService: EventService) {}

  deleteEvent(id: string) {
    this._eventService.deleteEvent(id).subscribe({
      next: () => {
        this.eventDeleted.emit(id);
      },
      error: (error) => {
        console.error('Error deleting event', error);
      },
    });
  }
}
