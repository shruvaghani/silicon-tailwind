import { Route } from '@angular/router'
import { Details } from './details/details'
import { Security } from './security/security'
import { Messages } from './messages/messages'
import { Notifications } from './notifications/notifications'
import { SavedItems } from './saved-items/saved-items'
import { Collections } from './collections/collections'
import { Payment } from './payment/payment'

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'details',
    component: Details,
    data: { title: 'Account - Detail' },
  },
  {
    path: 'security',
    component: Security,
    data: { title: 'Account - Security' },
  },
  {
    path: 'notifications',
    component: Notifications,
    data: { title: 'Account - Notifications' },
  },
  {
    path: 'messages',
    component: Messages,
    data: { title: 'Account - Messages' },
  },
  {
    path: 'saved-items',
    component: SavedItems,
    data: { title: 'Account - Saved Items' },
  },
  {
    path: 'collections',
    component: Collections,
    data: { title: 'Account - Collections' },
  },
  {
    path: 'payment',
    component: Payment,
    data: { title: 'Account - Payment Details' },
  },
]
