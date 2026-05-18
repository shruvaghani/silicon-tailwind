import { Routes } from '@angular/router';
import { LandingLayout } from '@layouts/landing-layout/landing-layout';
import { Pricing } from './views/pages/pricing/pricing';
import { ErrorV1 } from './views/pages/speciality/error-v1/error-v1';
import { ErrorV2 } from './views/pages/speciality/error-v2/error-v2';
import { Signin } from './views/auth/signin/signin';
import { Signup } from './views/auth/signup/signup';

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
  {
    path: 'about',
    component: LandingLayout,
    loadChildren: () => import('./views/pages/about/about.route').then((mod) => mod.ABOUT_ROUTES),
  },
  {
    path: 'blog',
    component: LandingLayout,
    loadChildren: () => import('./views/pages/blog/blog.route').then((mod) => mod.BLOG_ROUTES),
  },
  {
    path: 'portfolio',
    component: LandingLayout,
    loadChildren: () =>
      import('./views/pages/portfolio/portfolio.route').then((mod) => mod.PORTFOLIO_ROUTES),
  },
  {
    path: 'services',
    component: LandingLayout,
    loadChildren: () =>
      import('./views/pages/services/service.route').then((mod) => mod.SERVICE_ROUTE),
  },
  {
    path: 'pricing',
    component: Pricing,
    data: { title: 'Pricing', darkHeader: true },
  },
  {
    path: 'contacts',
    component: LandingLayout,
    loadChildren: () =>
      import('./views/pages/contacts/contact.route').then((mod) => mod.CONTACT_ROUTES),
  },
  {
    path: '404/v1',
    component: ErrorV1,
    data: { title: '404 Not Found v1' },
  },
  {
    path: '404/v2',
    component: ErrorV2,
    data: { title: '404 Not Found v2' },
  },
  {
    path: 'account',
    component: LandingLayout,
    loadChildren: () => import('./views/account/accounts.route').then((mod) => mod.ACCOUNT_ROUTES),
  },
  {
    path: 'account/sign-in',
    component: Signin,
    data: { title: 'Account - Sign In' },
  },
  {
    path: 'account/sign-up',
    component: Signup,
    data: { title: 'Account - Sign Up' },
  },
];
