const landings = 'assets/img/landings.jpg';
export type MobileMenuLinkType = {
  label: string;
  link: string;
  isNew?: boolean;
};

export type MobileMenuSectionType = {
  title?: string;
  links: MobileMenuLinkType[];
};

export type MobileMenuType = {
  menuTitle: string;
  image?: string;
  imageAlt?: string;
  sections: MobileMenuSectionType[];
};

export const mobileNavbarData: MobileMenuType[] = [
  {
    menuTitle: 'Landings',
    image: landings,
    imageAlt: 'Landings',
    sections: [
      {
        links: [
          {
            label: 'Template Intro Page',
            link: '/',
          },
          {
            label: 'Mobile App Showcase v.1',
            link: '/landing/mobile-showcase/v1',
          },
          {
            label: 'Mobile App Showcase v.2',
            link: '/landing/mobile-showcase/v2',
          },
          {
            label: 'Mobile App Showcase v.3',
            link: '/landing/mobile-showcase/v3',
            isNew: true,
          },
          {
            label: 'Product Landing',
            link: '/landing/product',
          },
          {
            label: 'SaaS v.1',
            link: '/landing/saas/v1',
          },
          {
            label: 'SaaS v.2',
            link: '/landing/saas/v2',
          },
          {
            label: 'SaaS v.3',
            link: '/landing/saas/v3',
          },
          {
            label: 'SaaS v.4',
            link: '/landing/saas/v4',
          },
          {
            label: 'SaaS v.5',
            link: '/landing/saas/v5',
            isNew: true,
          },
          {
            label: 'Startup',
            link: '/landing/startup',
          },
          {
            label: 'Financial Consulting',
            link: '/landing/financial',
          },
          {
            label: 'Online-Courses',
            link: '/landing/online-courses',
          },
          {
            label: 'Medical',
            link: '/landing/medical',
          },
          {
            label: 'Software Dev Agency v.1',
            link: '/landing/software-dev-agency/v1',
          },
          {
            label: 'Software Dev Agency v.2',
            link: '/landing/software-dev-agency/v2',
          },
          {
            label: 'Software Dev Agency v.3',
            link: '/landing/software-dev-agency/v3',
          },
          {
            label: 'Conference',
            link: '/landing/conference',
          },
          {
            label: 'Digital Agency',
            link: '/landing/digital-agency',
          },
          {
            label: 'Blog Homepage',
            link: '/landing/blog',
          },
        ],
      },
    ],
  },

  {
    menuTitle: 'Pages',
    sections: [
      {
        title: 'About',
        links: [
          {
            label: 'About v.1',
            link: '/about/v1',
          },
          {
            label: 'About v.2',
            link: '/about/v2',
          },
          {
            label: 'About v.3',
            link: '/about/v3',
          },
        ],
      },
      {
        title: 'Blog',
        links: [
          {
            label: 'List View with Sidebar',
            link: '/blog/list-with-sidebar',
          },
          {
            label: 'Grid View with Sidebar',
            link: '/blog/grid-with-sidebar',
          },
          {
            label: 'List View no Sidebar',
            link: '/blog/list-no-sidebar',
          },
          {
            label: 'Grid View no Sidebar',
            link: '/blog/grid-no-sidebar',
          },
          {
            label: 'Simple Feed',
            link: '/blog/simple-feed',
          },
          {
            label: 'Single Post',
            link: '/blog/single',
          },
          {
            label: 'Podcast',
            link: '/blog/podcast',
          },
        ],
      },
      {
        title: 'Portfolio',
        links: [
          {
            label: 'Grid View',
            link: '/portfolio/grid',
          },
          {
            label: 'List View',
            link: '/portfolio/list',
          },
          {
            label: 'Slider View',
            link: '/portfolio/slider',
          },
          {
            label: 'Courses',
            link: '/portfolio/courses',
          },
          {
            label: 'Single Project',
            link: '/portfolio/single-project',
          },
          {
            label: 'Single Course',
            link: '/portfolio/single-course',
          },
        ],
      },
      {
        title: 'Services',
        links: [
          {
            label: 'Services v.1',
            link: '/services/v1',
          },
          {
            label: 'Services v.2',
            link: '/services/v2',
          },
          {
            label: 'Service Details v.1',
            link: '/services/single/v1',
          },
          {
            label: 'Service Details v.2',
            link: '/services/single/v2',
          },
        ],
      },
      {
        title: 'Pricing',
        links: [
          {
            label: 'Pricing Page',
            link: '/pricing',
          },
        ],
      },
      {
        title: 'Contacts',
        links: [
          {
            label: 'Contacts v.1',
            link: '/contacts/v1',
          },
          {
            label: 'Contacts v.2',
            link: '/contacts/v2',
          },
          {
            label: 'Contacts v.3',
            link: '/contacts/v3',
          },
        ],
      },
      {
        title: 'Specialty',
        links: [
          {
            label: '404 Error v.1',
            link: '/404/v1',
          },
          {
            label: '404 Error v.2',
            link: '/404/v2',
          },
        ],
      },
    ],
  },

  {
    menuTitle: 'Account',
    sections: [
      {
        links: [
          {
            label: 'Account Details',
            link: '/account/details',
          },
          {
            label: 'Security',
            link: '/account/security',
          },
          {
            label: 'Notifications',
            link: '/account/notifications',
          },
          {
            label: 'Messages',
            link: '/account/messages',
          },
          {
            label: 'Saved Items',
            link: '/account/saved-items',
          },
          {
            label: 'My Collections',
            link: '/account/collections',
          },
          {
            label: 'Payment Details',
            link: '/account/payment',
          },
          {
            label: 'Sign In',
            link: '/account/signin',
          },
          {
            label: 'Sign up',
            link: '/account/signup',
          },
        ],
      },
    ],
  },
];
