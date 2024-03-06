import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../types';
import { environment } from '../../environments/environment';

const EVENTS_URL = `${environment.apiBaseUrl}/events`;


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _httpClient: HttpClient) { }

  getEvents(date?: Date): Observable<Event[]> {
    return this._httpClient.get<Event[]>(EVENTS_URL + (date ? `?date=${date.toISOString()}` : ''));
  }

  getEvent(id: string): Observable<Event> {
    return this._httpClient.get<Event>(`${EVENTS_URL}/${id}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this._httpClient.post<Event>(EVENTS_URL, event);
  }

  updateEvent(event: Event): Observable<Event> {
    return this._httpClient.put<Event>(`${EVENTS_URL}/${event.id}`, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this._httpClient.delete(`${EVENTS_URL}/${id}`);
  }
}
