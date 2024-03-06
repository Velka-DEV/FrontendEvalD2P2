import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-event-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-event-view.component.html',
})
export class EditEventViewComponent {
  eventId: string = '';
  event: Event | null = null;

  eventForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    location: ['', Validators.required],
  });

  onSubmit() {
    console.log('Form submitted');
    if (!this.eventForm.invalid) {
      const event: Event = {
        id: this.eventId,
        title: this.eventForm.value.title || '',
        description: this.eventForm.value.description || '',
        startDate: this.eventForm.value.startDate || new Date(),
        endDate: this.eventForm.value.endDate || new Date(),
        location: this.eventForm.value.location || '',
      };
      this.eventService.updateEvent(event).subscribe({
        next: () => {
          this.router.navigate(['/events']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    } else {
      console.error('Form invalid', this.eventForm);
    }
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id') ?? '';

    this.eventService.getEvent(this.eventId).subscribe({
      next: (event) => {
        this.event = event;
        this.eventForm.setValue({
          title: event.title,
          description: event.description,
          startDate: event.startDate,
          endDate: event.endDate,
          location: event.location,
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private eventService: EventService
  ) {}
}
