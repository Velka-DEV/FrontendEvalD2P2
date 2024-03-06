import { Component } from '@angular/core';
import { OxyaService } from '../../services/oxya.service';
import { Post } from '../../../types';

@Component({
  selector: 'app-lazy-view',
  standalone: true,
  imports: [],
  templateUrl: './lazy-view.component.html',
})
export class LazyViewComponent {
  posts: Post[] = [];

  constructor(private oxyaService: OxyaService) {
  }

  ngOnInit() {
    this.oxyaService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
