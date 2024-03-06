import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'events/grid',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'table',
                loadComponent: () => import('./events/views/table-events-view/table-events-view.component').then(m => m.ListEventsViewComponent)
            },
            {
                path: 'grid',
                loadComponent: () => import('./events/views/grid-events-view/grid-events-view.component').then(m => m.GridEventsViewComponent)
            },
            {
                path: 'add',
                loadComponent: () => import('./events/views/add-event-view/add-event-view.component').then(m => m.AddEventViewComponent)
            },
            {
                path: ':id',
                loadComponent: () => import('./events/views/show-event-view/show-event-view.component').then(m => m.ShowEventViewComponent)
            },
        
            {
                path: ':id/edit',
                loadComponent: () => import('./events/views/edit-event-view/edit-event-view.component').then(m => m.EditEventViewComponent)
            }
        ]
    }
];
