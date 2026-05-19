import { Route } from '@angular/router'
import { AboutV1 } from './about-v1/about-v1'
import { AboutV2 } from './about-v2/about-v2'
import { AboutV3 } from './about-v3/about-v3'

export const ABOUT_ROUTES: Route[] = [
  {
    path: 'v1',
    component: AboutV1,
    data: { title: 'About v.1' },
  },
  {
    path: 'v2',
    component: AboutV2,
    data: { title: 'About v.2' },
  },
  {
    path: 'v3',
    component: AboutV3,
    data: { title: 'About v.3',darkHeader: true  },
  },
]
