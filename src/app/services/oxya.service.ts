import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class OxyaService {

  constructor(private _httpClient: HttpClient) {

  }

  getPosts() {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
