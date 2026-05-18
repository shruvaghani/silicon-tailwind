export type AccountMenuType = {
  title: string;
  link: string;
  icon: string;
  active?: boolean;
};

export const accountMenuData: AccountMenuType[] = [
  {
    title: 'Account Details',
    link: '/account/details',
    icon: 'settings',
    active: true,
  },
  {
    title: 'Security',
    link: '/account/security',
    icon: 'lock',
  },
  {
    title: 'Notifications',
    link: '/account/notifications',
    icon: 'bell',
  },
  {
    title: 'Messages',
    link: '/account/messages',
    icon: 'messages-square',
  },
  {
    title: 'Saved Items',
    link: '/account/saved-items',
    icon: 'bookmark',
  },
  {
    title: 'My Collections',
    link: '/account/collections',
    icon: 'square-library',
  },
  {
    title: 'Payment Details',
    link: '/account/payment',
    icon: 'credit-card',
  },
  {
    title: 'Sign Out',
    link: '/account/signin',
    icon: 'log-out',
  },
];
