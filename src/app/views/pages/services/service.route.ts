import { Route } from '@angular/router'
import { ServiceV2 } from './service-v2/service-v2'
import { ServiceV1 } from './service-v1/service-v1'
import { ServiceDetailV1 } from './service-detail-v1/service-detail-v1'
import { ServiceDetailV2 } from './service-detail-v2/service-detail-v2'

export const SERVICE_ROUTE: Route[] = [
  {
    path: 'v1',
    component: ServiceV1,
    data: { title: 'Services v.1' },
  },
  {
    path: 'v2',
    component: ServiceV2,
    data: { title: 'Services v.2' },
  },
  {
    path: 'single/v1',
    component: ServiceDetailV1,
    data: { title: 'Service Details  v.1' },
  },
  {
    path: 'single/v2',
    component: ServiceDetailV2,
    data: { title: 'Service Details v.2' },
  },
]
