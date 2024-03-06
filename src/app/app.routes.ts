import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeViewComponent
            },
            {
                path: 'lazy',
                loadComponent: () => import('./views/lazy-view/lazy-view.component').then(m => m.LazyViewComponent)
            }
        ]
    }
];
