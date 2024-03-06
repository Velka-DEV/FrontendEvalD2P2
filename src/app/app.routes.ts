import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./events/views/list-events-view/list-events-view.component').then(m => m.ListEventsViewComponent)
            },
        
            {
                path: 'events/:id',
                loadComponent: () => import('./events/views/show-event-view/show-event-view.component').then(m => m.ShowEventViewComponent)
            },
        
            {
                path: 'events/:id/edit',
                loadComponent: () => import('./events/views/edit-event-view/edit-event-view.component').then(m => m.EditEventViewComponent)
            }
        ]
    }
];
