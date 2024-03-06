import { Component } from '@angular/core';
import { Event } from '../../../types';
import { FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-event-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-event-view.component.html',
})
export class AddEventViewComponent {
  eventForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    location: ['', Validators.required],
  });

  onSubmit() {
    console.log('Form submitted');
    if (!this.eventForm.invalid) {
      const event: Event = {
        id: '',
        title: this.eventForm.value.title || '',
        description: this.eventForm.value.description || '',
        startDate: this.eventForm.value.startDate || new Date(),
        endDate: this.eventForm.value.endDate || new Date(),
        location: this.eventForm.value.location || '',
      }
      this.eventService.createEvent(event).subscribe({
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private eventService: EventService
  ) {}
}
