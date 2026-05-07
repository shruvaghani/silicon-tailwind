import { Routes } from '@angular/router';
import { LandingLayout } from '@layouts/landing-layout/landing-layout';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home').then((mod) => mod.Home),
    data: { title: 'Index' },
  },
  {
    path: 'landing',
    component: LandingLayout,
    loadChildren: () => import('./views/landings/landings.route').then((mod) => mod.LANDING_ROUTES),
  },

];
